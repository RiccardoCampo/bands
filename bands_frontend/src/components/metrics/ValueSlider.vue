<template>
    <div class="container" ref="container" :onmouseup="moveSlider" :onmouseleave="stopSliding" :onmousemove="slide">
        <div class="backFill"></div>
        <div v-if="active & range" class="thumb" :onmousedown="startSlidingLeft">
            <span v-if="isSliding">{{ this.minValue + 1 }}</span>
        </div>
        <div class="fill"></div>
        <div class="thumb" :onmousedown="startSlidingRight">
            <span v-if="isSliding">{{ this.maxValue }}</span>
        </div>
    </div>
    <p style="font-size: 1.4pc; margin-top: 7px; margin-bottom: 7px">{{ label }}</p>
</template>
  
<script>

export default {
    name: 'ValueSlider',
    props: {
        label: {
            type: String
        },
        modelValue: {
            type: Array,
            default: () => {return [0, 1]}
        },
        color: {
            type: String,
            default: "red"
        },
        width: {
            type: Number,
            default: 100
        },
        height: {
            type: Number,
            default: 15
        },
        active: {
            type: Boolean,
            default: false
        },
        range: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            minValue: 0,
            maxValue: 1,
            sliderPosition: 0,
            slidingLeft: false,
            slidingRight: false
        }
    },
    mounted () {
        this.sliderPosition = this.$refs["container"].getBoundingClientRect().x
        this.maxValue = this.range ? Math.max(this.modelValue[1], 1) : this.modelValue
        this.emit()
    },
    computed: {
        stepWidth () {
            return (this.width / 5)
        },
        sliderWidth () {
            return this.width + "px"
        },
        sliderHeight () {
            return this.height + "px"
        },
        backFillWidth () {
            return this.stepWidth * (this.minValue) + "px"
        },
        fillWidth () {
            return this.stepWidth * (this.maxValue - this.minValue) + "px"
        },
        thumbHeigth () {
            return this.height + 2 + "px"
        },
        mainColor () {
            return `var(--dark${this.color})`
        },
        offColor () {
            return `var(--light${this.color})`
        },
        thumbHoverColor () {
            return this.active ? "var(--cream)" : "var(--white)"
        },
        isSliding () {
            return this.slidingLeft || this.slidingRight
        }
    },
    methods: {
        startSlidingRight () {
            this.slidingRight = this.active & this.range
        },
        startSlidingLeft () {
            this.slidingLeft = this.active
        },
        stopSliding (event) {
            if (this.active && this.slidingRight) {
                this.updateMaxValueFromPosition(event.pageX)
                this.slidingRight = false
            }
            if (this.active && this.slidingLeft) {
                this.updateMinValueFromPosition(event.pageX)
                this.slidingLeft = false
            }
        },
        slide (event) {
            if (this.active && this.slidingRight) {
                this.updateMaxValueFromPosition(event.pageX)
            }
            if (this.active && this.slidingLeft) {
                this.updateMinValueFromPosition(event.pageX)
            }
        },
        moveSlider (event) {
            const position = event.pageX

            if (this.active) {
                if (this.slidingLeft) {
                    this.updateMinValueFromPosition(position)
                    this.slidingLeft = false
                } else if (this.slidingRight) {
                    this.updateMaxValueFromPosition(position)
                    this.slidingRight = false
                // If the cursor stands from the first half of the selected bar or left of the left thumb.
                } else if (this.range && (position - (this.maxValue - this.minValue) / 2 * this.stepWidth < this.sliderPosition + this.minValue * this.stepWidth)) {
                    this.updateMinValueFromPosition(position)
                } else {
                    this.updateMaxValueFromPosition(position)
                }
            }
        },
        updateMaxValueFromPosition(position) {
            this.maxValue = Math.max(Math.floor((position - this.sliderPosition - this.stepWidth / 2) / this.stepWidth) + 1, this.minValue + 1)
            this.emit()
        },
        updateMinValueFromPosition(position) {
            this.minValue = Math.min(Math.floor((position - this.sliderPosition - this.stepWidth / 2) / this.stepWidth) + 1, this.maxValue - 1)
            this.emit()
        },
        emit () {
            this.$emit('update:modelValue', this.range ? [this.minValue, this.maxValue] : this.maxValue)
        }
    }
}

</script>

<style scoped>

div.container {
    margin: 5px;
    display: flex;
    height: v-bind("sliderHeight");
    width: v-bind("sliderWidth");
    background-color: v-bind("offColor");
    outline: solid;
    outline-width: 2px;
    outline-color: v-bind("mainColor");
}

div.backFill {
    height: v-bind("sliderHeight");
    width: v-bind("backFillWidth");
    background-color: v-bind("offColor");
    transition: width 0.3s;
}

div.fill {
    height: v-bind("sliderHeight");
    width: v-bind("fillWidth");
    background-color: v-bind("mainColor");
    transition: width 0.3s;
}

div.thumb {
    height: v-bind("thumbHeigth");
    width: 3px;
    background-color: var(--white);
    z-index: 1;
    margin-top: -1px;
}

div.thumb:hover {
    background-color: v-bind("thumbHoverColor");
}

span {
    user-select: none;
    color: var(--grey);
    position: relative;
    bottom: -15px;
    left: -2px;
}

</style>
  