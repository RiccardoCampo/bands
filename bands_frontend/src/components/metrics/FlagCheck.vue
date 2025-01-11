<template>
    <div class="box" :onclick="toggle">
        <div class="outline">
            <check-icon v-if="value" :height="height" :width="width" iconColor="var(--darkgreen)"/>
            <cross-icon v-else :height="height" :width="width" iconColor="var(--darkred)"/>
        </div>
    </div>    
    <div class="labels">
        <p class="label">{{ label }}</p>
        <button v-if="active" class="discard" @click="discard" title="Discard Metric">
          <cross-icon style="margin-top: 0px; margin-left: -3px;" :height="18" :width="18" iconColor="var(--grey)"/>
        </button>
    </div>
</template> 
  
<script>

export default {
    name: 'FlagCheck',
    emits: ["discardMetric", "update:modelValue"],
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
        },
        discard ()  {
            this.$emit("discardMetric", this.label)
        },
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

div.labels {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -27px 0 7px 0;
}
p.label {
    font-size: 1.4pc;
}

button.discard {
    border: none;
    transition: all 0.1s;
    margin-left: auto;
    height: 20px;
    width: 20px;
    background: none;
}

button.discard:hover {  
    background-color: var(--lightred);
}
button.discard:active {
    background-color: var(--cream);
}
</style>
  