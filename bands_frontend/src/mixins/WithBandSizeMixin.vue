<script lang="ts">
import { HeaderBandMaxSize, HeaderBandMinSize, HeaderSliderMaxHeight, HeaderSliderMinHeight } from '@/config';
import { usePageStatus } from '@/store/pageStatus';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WithBandSizeMixin',
  computed: {
    ...mapState(usePageStatus, ['pageSize']),
    headerSliderMinHeight(): number {
      return this.resizeWithScreenSize(HeaderSliderMinHeight)
    },
    headerSliderMaxHeight(): number {
      return this.resizeWithScreenSize(HeaderSliderMaxHeight)
    },
    headerBandMaxWidth(): number {
      return this.resizeWithScreenSize(HeaderBandMaxSize.WIDTH)
    },
    headerBandMaxHeight(): number {
      return this.resizeWithScreenSize(HeaderBandMaxSize.HEIGHT)
    },
    headerBandMinWidth(): number {
      return this.resizeWithScreenSize(HeaderBandMinSize.WIDTH)
    },
    headerBandMinHeight(): number {
      return this.resizeWithScreenSize(HeaderBandMinSize.HEIGHT)
    },
    sliderMovement(): number {
      return this.resizeWithScreenSize(50)
    },
    sliderHeight(): number {
      return this.resizeWithScreenSize(10)
    },
    sliderHeightMinimized(): number {
      return 0
    },
    fontSize(): number {
      return this.isMobile ? 5 : 16
    },
    fontSizeMinimized(): number {
      return this.isMobile ? 4 : 10
    },
    letterTopMargin(): number {
      return this.isMobile ? -76 : -240
    },
    letterTopMarginMinimized(): number {
      return this.isMobile ? -63 : -150
    },
    bandsPosition(): number {
      return -10
    },
    bandsPositionMinimized(): number {
      return this.resizeWithScreenSize(-240)
    },
    isMobile(): boolean {
      return this.pageSize.width < 600
    }
  },
  methods: {
    resizeWithScreenSize(size: number): number {
      if (this.isMobile) {
        return size / 2
      }
      return size
    }
  }
});

</script>
