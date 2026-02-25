<template>
  <div class="header">
    <header-band  v-for="(band, position) in bands" :key=position :letter="band.letter" :position="position" :color="band.color" :minimized="headerMinimized"></header-band>
  </div>
</template>


<script lang="ts">
import HeaderBand from './HeaderBand.vue';
import {ColorOrder} from '../config';
import { mapState } from 'pinia';
import { usePageStatus } from '@/store/pageStatus';
import { defineComponent } from 'vue';
import WithBandSizeMixin from '@/mixins/WithBandSizeMixin.vue';

type LetterWithColor = {
  letter: string
  color: string
}


/**
 * Header section, render as many bands are needed to fill in the screen width (add or remove bands when the screen is resized).
 * Bands colors are picked from the color ordered list, centered on the five lettered bands.
 */
export default defineComponent({
  name: 'HeaderSection',
  components: {
    'header-band': HeaderBand,
  },
  mixins: [WithBandSizeMixin],
  methods: {
    /**
     * Get the band color, given it's index and the number of added bands.
     * Make sure that the lettered bands start from the first color, additional bands will follow the order.
     *
     * @param index band index
     * @param addedBands number of non-letter bands
     */
    getColor(index: number, addedBands: number) {
      const colorsLength = ColorOrder.length;

      let colorIndex = (index + colorsLength - (addedBands / 2) % colorsLength ) % colorsLength;

      return ColorOrder[colorIndex];
    },
  },
  computed: {
    ...mapState(usePageStatus, ['headerMinimized', 'pageSize']),
    /**
     * Get the list of bands. Each band is defined by its letter (empty when no letter) and color.
     */
    bands(): LetterWithColor[] {
      let bands = ["b", "a", "n", "d", "s"]
      let widthToFill = this.pageSize.width - this.letteredBandsSize + 400
      let addedBands = 0
      while (widthToFill > 0) {
        bands = [""].concat(bands, [""])
        widthToFill -= this.headerBandMaxWidth * 2
        addedBands += 2
      }

      return bands.map((band, index) => ({letter: band, color: this.getColor(index, addedBands)}))
    },
    letteredBandsSize(): number {
      return this.headerBandMaxWidth * 5
    },
    sideMargin(): string {
      return this.shouldShrink ? "-10px" : (-this.headerBandMaxWidth - 10) + "px"
    },
    /**
     * Shrink the bands if the screen gets too tight.
     */
    shouldShrink(): boolean {
      return this.pageSize.width < this.letteredBandsSize
    },
    bandsPositionAttribute (): string {
      return (this.headerMinimized ? this.bandsPositionMinimized : this.bandsPosition) + "px"
    },
  }
});
</script>

<style scoped>
div.header  {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: v-bind("bandsPositionAttribute");
  margin-left: v-bind("sideMargin");
  margin-right: v-bind("sideMargin");
  pointer-events: none;
  transition: all 2s;
}
</style>
