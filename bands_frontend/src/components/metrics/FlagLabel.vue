<template> 
    <div class="labels">
        <div class="outline">
            <span class="label">{{ label }}</span>
        </div>
        <button v-if="active && !hideDiscardButton" class="discard" @click="discard" title="Discard Metric">
          <cross-icon style="margin-top: 4px;" :height="18" :width="18" iconColor="var(--darkgrey)"/>
        </button>
    </div>
</template> 
  
<script lang="ts">
import WithColorMixin from '@/mixins/WithColorMixin.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FlagLabel',
    emits: ["discardMetric"],
    props: {
        label: {
            type: String
        },
        fontColor: {
            type: String,
            default: "black"
        },
        active: {
            type: Boolean,
            default: false
        },
        hideDiscardButton: {
            type: Boolean,
            default: false
        },
    },
    mixins: [WithColorMixin],
    computed: {
        labelFontColor(): string {
            return `var(--${this.fontColor})`;
        }
    },
    methods: {
        discard ()  {
            this.$emit("discardMetric", this.label)
        },
    }
});

</script>

<style scoped>

div.labels {
    display: flex;
}

div.outline {
    height: 28px;
    background-color: v-bind("lightColor");
}

span.label {
    font-size: 1.4pc;
    color: v-bind("labelFontColor");
    margin: 0 10px 0 10px;
}

button.discard {
    margin-left: auto;
    height: 28px;
    width: 20px;
}

button.discard:hover {  
    background-color: var(--lightred);
}
button.discard:active {
    background-color: var(--cream);
}
</style>
  