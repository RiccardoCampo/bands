<template>
    <div class="band">
        <div v-if="displaySlider">
            <div class="highlighted"></div>
            <div class="slider"></div>
            <div class="letter">{{ letter }}</div>
        </div>
    </div>
</template>


<script lang="ts">
import WithColorMixin from '@/mixins/WithColorMixin.vue';
import { defineComponent } from 'vue';
import WithBandSizeMixin from '@/mixins/WithBandSizeMixin.vue';

/**
 * Header band component. If the band has a letter, also render the slider.
 * 
 * The slider randomly moves up and down between limits.
 */
export default defineComponent({
    name: 'HeaderBand',
    props: {
        letter: String,
        position: Number,
        minimized: Boolean
    },
    mixins: [WithColorMixin, WithBandSizeMixin],
    data () {
        return {
            sliderPosition: 180,
        }
    },
    computed: {
        /**
         * The slider is only visible for lettered bands.
         */
        displaySlider(): boolean {
            return Boolean(this.letter)
        },
        flex(): string {
            return (this.minimized && this.letter ? `0 ${this.headerBandMinWidth}px` : `0 ${this.headerBandMaxWidth}px`)
        },
        height(): string {
            return (this.minimized ? this.headerBandMinHeight : this.headerBandMaxHeight) + "px"
        },
        highlightedHeight(): string {
            return (this.minimized ? this.headerBandMinHeight : this.sliderPosition) + "px"
        },
        sliderHeightAttribute(): string {
            return (this.minimized ? this.sliderHeightMinimized : this.sliderHeight) + "px"
        },
        fontSizeAttribute(): string {
            return (this.minimized ? this.fontSizeMinimized : this.fontSize) + "pc"
        },
        letterTopMarginAttribute(): string {
            return (this.minimized ? this.letterTopMarginMinimized : this.letterTopMargin) + "px"
        }
    },
    methods: {
        /**
         * Move the slider, pick a direction and try to move towards it. Clamp the result between minium and maximum height.
         */
        moveSlider() {
            this.sliderPosition += (Math.floor(Math.random() * 3) - 1) * this.sliderMovement;
            this.sliderPosition = Math.min(Math.max(this.sliderPosition, this.headerSliderMinHeight), this.headerSliderMaxHeight);
        },
        /**
         * Decide when the next slider movement will happen.
         * 
         * @param min minimum time in milliseconds
         */
        getNextSliderMoveTime(min = 5000) {
            return Math.floor(Math.random() * 3000) + min;
        },
        /**
         * Start the movement timeout, on timeout: move the slider and set the next movement.
         */
        startMoveTimeout(milliseconds: number) {
            setTimeout(() => {
                this.moveSlider();

                this.startMoveTimeout(this.getNextSliderMoveTime());
            }, milliseconds)
        }
    },
    mounted: function () {
        if (this.displaySlider) {
            this.sliderPosition = Math.floor(Math.random() * (this.headerSliderMaxHeight - this.headerSliderMinHeight + 1)) + this.headerSliderMinHeight
            this.startMoveTimeout(this.getNextSliderMoveTime(1000));
        }
    },
});
</script>

<style scoped>
div.band {
    flex: v-bind("flex");
    background-color: v-bind("lightColor");
    flex-grow: 0;
    flex-shrink: 1;
    height: v-bind("height");
    min-width: 30px;
}
div.highlighted {
    height: v-bind("highlightedHeight");
    background-color: v-bind("darkColor");
    transition: height 2s;
}
div.slider {
    position: relative;
    height: v-bind("sliderHeightAttribute");
    background-color: var(--white);
}
div.letter {
    font-family: title;
    position: relative;
    top: v-bind("letterTopMarginAttribute");
    height: 0px;
    user-select: none;
    font-size: v-bind("fontSizeAttribute");
    color: var(--white);
}
</style>
