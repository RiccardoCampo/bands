<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="viewBox" fill="none" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"
    >
        <title :id="iconName" lang="en">{{ iconName }} icon</title>
        <slot/>
    </svg>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            default: 'box'
        },
        width: {
            type: [Number, String],
            default: 18
        },
        height: {
            type: [Number, String],
            default: 18
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
        viewBoxWidth: {
            type: [Number, String],
            default: 24
        },
        viewBoxHeight: {
            type: [Number, String],
            default: 24
        },
        strokeWidth: {
            type: [Number, String],
            default: 2
        }
    },
    computed: {
        viewBox() {
            return `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`
        }
    }
}
</script>
