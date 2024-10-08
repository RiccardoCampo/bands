<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 24 24" fill="none" :stroke="iconColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
        }
    }
}
</script>
