<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="viewBox" fill="none" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"
    >
        <slot/>
    </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
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
        viewBox(): string {
            return `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`
        }
    }
});
</script>
