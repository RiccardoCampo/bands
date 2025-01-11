<template>
    <div class="band">
        <div v-if="displaySlider">
            <div class="highlighted"></div>
            <div class="slider"></div>
            <div class="letter">{{ letter }}</div>
        </div>
    </div>
</template>


<script>
import WithColorMixin from '@/mixins/WithColorMixin.vue';
import {HeaderSliderMaxHeight, HeaderSliderMinHeight, HeaderSliderMinimizedHeight, HeaderBandSize} from '../config';

/**
 * Header band component. If the band has a letter, also render the slider.
 * 
 * The slider randomly moves up and down between limits.
 */
export default {
    name: 'HeaderBand',
    props: {
        letter: String,
        position: Number,
        minimized: Boolean
    },
    mixins: [WithColorMixin],
    data () {
        return {
            sliderPosition: 240,
        }
    },
    computed: {
        /**
         * The slider is only visible for lettered bands.
         */
        displaySlider () {
            return Boolean(this.letter)
        },
        flex () {
            return `0 ${HeaderBandSize.WIDTH}px`
        },
        height () {
            return HeaderBandSize.HEIGHT + "px"
        },
        highlightedHeight () {
            return (this.minimized ? HeaderSliderMinimizedHeight : this.sliderPosition) + "px"
        },
        sliderHeight () {
            return (this.minimized ? 0 : 10) + "px"
        },
    },
    methods: {
        /**
         * Move the slider, pick a direction and try to move towards it. Clamp the result between minium and maximum height.
         */
        moveSlider() {
            this.sliderPosition += (Math.floor(Math.random() * 3) - 1) * 50;
            this.sliderPosition = Math.min(Math.max(this.sliderPosition, HeaderSliderMinHeight), HeaderSliderMaxHeight);
        },
        /**
         * Decide when the next slideer movement will happen.
         * 
         * @param min minimum time in milliseconds
         */
        getNextSliderMoveTime(min = 5000) {
            return Math.floor(Math.random() * 3000) + min;
        },
        /**
         * Start the movement timeout, on timeout: move the slider and set the next movement.
         */
        startMoveTimeout(milliseconds) {
            setTimeout(() => {
                this.moveSlider();

                this.startMoveTimeout(this.getNextSliderMoveTime());
            }, milliseconds)
        }
    },
    mounted: function () {
        if (this.displaySlider) {
            this.startMoveTimeout(this.getNextSliderMoveTime(1000));
        }
    },
}
</script>

<style scoped>
div.band {
    flex: v-bind("flex");
    background-color: v-bind("lightColor");
    flex-grow: 0;
    flex-shrink: 1;
    min-width: 110px;
    height: v-bind("height");
}
div.highlighted {
    height: v-bind("highlightedHeight");
    background-color: v-bind("darkColor");
    transition: height 2s;
}
div.slider {
    position: relative;
    height: v-bind("sliderHeight");
    background-color: var(--white);
}
div.letter {
    font-family: title;
    position: relative;
    top: -240px;
    height: 0px;
    user-select: none;
    font-size: 16pc;
    color: var(--white);
}
</style>
