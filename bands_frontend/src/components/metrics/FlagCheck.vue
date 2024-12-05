<template>
    <div class="box" :onclick="toggle">
        <div class="outline">
            <check-icon v-if="value" :height="height" :width="width" iconColor="var(--darkgreen)"></check-icon>
            <cross-icon v-else :height="height" :width="width" iconColor="var(--darkred)"></cross-icon>
        </div>
    </div>
    <p style="font-size: 1.4pc; margin-top: -5px; margin-bottom: 7px">{{ label }}</p>
</template>
  
<script>

export default {
    name: 'FlagCheck',
    props: {
        label: {
            type: String
        },
        modelValue: {
            type: Number,
            default: 1
        },
        width: {
            type: Number,
            default: 32
        },
        height: {
            type: Number,
            default: 32
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            value: false
        }
    },
    mounted () {
        this.value = Boolean(this.modelValue)
        this.emit()
    },
    computed: {
        hoverColor () {
            if (!this.active)
                return "var(--white)"

            return this.value ? "var(--lightgreen)" : "var(--lightred)"
        },
        outlineHeight () {
            return this.height + "px"
        },
        outlineWidth () {
            return this.width + "px"
        },
    },
    methods: {
        toggle () {
            if (this.active) {
                this.value = !this.value
                this.emit()
            }
        },
        emit () {
            this.$emit('update:modelValue', this.value ? 1: 0)
        }
    }
}

</script>

<style scoped>

div.box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div.outline {
    height: v-bind("outlineHeight");
    width: v-bind("outlineWidth");
    transition: all 0.2s;
    border-radius: 30%;
}

div.outline:hover {
    background-color: v-bind("hoverColor");
}

</style>
  