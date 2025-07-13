<template>
    <div class="metricsSelectorContainer">
      <div class="selectorPanel" >
        <div class="metric" v-for="metric in metrics" :key="metric">
          <span class="metric">
            {{ metric.name }}
          </span>
          <button class="metric" @click="selectMetric(metric)" title="Select Metric">
            <plus-icon height=28 width=28 />
          </button>
        </div>
        <div v-if="allowNewMetric" class="metric" style="justify-content: space-between; margin-bottom: 10px;">
          <input class="input" v-model="newMetric.name"/>
          <button class="metricType" @click="toggleNewMetricType" title="Switch Metric Type">
            <span>{{ this.newMetric.type }}</span>
          </button>
          <button class="metric" @click="addNewMetric" :disabled="newMetric.name === 'New Metric'" title="Add New Metric">
            <check-icon height=28 width=28 />
          </button>
        </div>
        <div class="metric" v-else-if="Object.keys(this.metrics).length === 0">
            <span class="emptySearch">No metrics found</span>
        </div>
      </div>
    </div>
</template>

<script>
import WithColorMixin from '@/mixins/WithColorMixin.vue';
import { useMetrics } from '@/store/Metrics';
import { mapActions } from 'pinia';


export default {
    name: 'MetricsSelector',
    props: {
        metrics: Object,
        width: String,
        allowNewMetric: {
            type: Boolean,
            default: false
        }
    },
    mixins: [WithColorMixin],
    data () {
        return {
          localMetric: this.metrics,
          newMetric: {}
        }
    },
    mounted () {
      this.resetNewMetric()
    },
    methods: {
        ...mapActions(useMetrics, ["addMetric"]),
        selectMetric (metric) {
          this.$emit("metricSelected", metric)
        },
        toggleNewMetricType () {
          this.newMetric.type = this.newMetric.type === "value" ? "flag" : "value"
        },
        addNewMetric() {
          if (this.allowNewMetric) {
            const createdMetric = this.addMetric(this.newMetric)

            this.localMetric.push(createdMetric)
            this.resetNewMetric()
          }
        },
        resetNewMetric () {
          this.newMetric = {
            name: "New Metric",
            type: "value",
            category: "score",
          }
        }
    }
}
</script>

<style scoped>

div.metricsSelectorContainer {
  position: relative;
  width: v-bind("width");
}

div.selectorPanel {
  position: absolute;
  z-index: 100;
  background-color: var(--cream);
  box-shadow: 2px 2px 2px v-bind("darkColor");
  max-height: 150px;
  overflow-y: scroll;
}

div.metric {
  display: flex;
  width: v-bind("width");
  margin-left: 10px;
}

span.metric {
  text-align: left;
  font-size: 1.3pc;
  flex-grow: 1;
}

button.metric {
  border: none;
  transition: all 0.1s;
  background: none;
  color: var(--darkgreen);
}

button.metric:hover {  
  background-color: var(--lightgreen);
}
button.metric:active {
  background-color: var(--cream);
}
button.metric:disabled {
  color: var(--lightgrey);
  background-color: var(--cream);
}

input.input  {
  font-size: 1.3pc;
  width: 100px;
  font-family: regular;
  color: var(--black);
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  border: none;
  border-bottom: 2px solid v-bind("lightColor");
  background-color: var(--cream);
}
input.input:focus {
  outline: none;
  border-bottom-color: v-bind("darkColor");
}


button.metricType {
  border: none;
  transition: all 0.1s;
  background: none;
  font-size: 1pc;
  width: 50px;
}

button.metricType:hover {
  color: v-bind("darkColor");
  background-color: v-bind("lightColor");
}
button.metricType:active {
  color: var(--black);
  background-color: var(--cream);
}

span.emptySearch {
  font-size: 1.5pc;
}
</style>
