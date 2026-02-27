<template >
    <div class="metricsSelectorContainer" >
      <div class="selectorPanel" v-click-outside="clickOutside">
        <div class="categoryAndMetricsContainer" v-for="(metricsWithValues, category) in metricsByCategory" :key="category">
          <span class="category">
            {{ category }}
          </span>
          <div class="metricContainer" v-for="metricWithValue in metricsWithValues" :key="metricWithValue.filter.metric.id">
            <span class="metric" v-if="metricWithValue.filter.metric.type === 'value'">
              {{ metricWithValue.filter.metric.name }}
            </span>
            <div class="metric">
              <value-slider 
                v-if="metricWithValue.filter.metric.type === 'value'"
                v-model="metricWithValue.filter.filterValues"
                v-on:update:modelValue="selectMetric(metricWithValue)"
                :color="metricWithValue.selected ? metricWithValue.filter.metric.color : 'grey'"
                active
                :range="metricWithValue.range"
                hideDiscardButton
                hideLabel 
              />
              <flag-label
                v-else
                :label="metricWithValue.filter.metric.name"
                :color="metricWithValue.selected ? metricWithValue.filter.metric.color : 'grey'"
                :fontColor="metricWithValue.selected ? 'black' : 'white'"
                active
                hideDiscardButton
              />
            </div>
            <button class="metric" @click="editMetric(metricWithValue)" title="Select Metric">
              <cross-icon v-if="metricWithValue.selected" height=28 width=28 />
              <plus-icon v-else height=28 width=28 />
            </button>
          </div>
        </div>
        <div v-if="allowNewMetric" class="metricContainer" style="margin-bottom: 10px;">
          <input class="input" v-model="newMetric.name"/>
          <input class="input" v-model="newMetric.category"/>
          <button class="metricType" @click="toggleNewMetricType" title="Switch Metric Type">
            <span>{{ newMetric.type }}</span>
          </button>
          <button class="metric" @click="addNewMetric" :disabled="newMetric.name === 'New Metric'" title="Add New Metric">
            <loading-icon v-if="loading" height="28" width="28"/>
            <check-icon v-else height=28 width=28 />
          </button>
        </div>
        <div class="metricContainer" v-else-if="metrics.length === 0">
            <span class="emptySearch">No metrics found</span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import WithColorMixin from '@/mixins/WithColorMixin.vue';
import ValueSlider from './metrics/ValueSlider.vue';
import FlagLabel from './metrics/FlagLabel.vue';
import { useMetrics } from '@/store/metrics';
import { MetricType, NewMetric } from '@/types/metrics';
import { ScoreFilter } from '@/types/score';
import { mapActions } from 'pinia';
import { PropType } from 'vue';
import { defineComponent } from 'vue';


export type ScoreFilterWithColor = {
  filter: ScoreFilter,
  selected: boolean,
  range: boolean
}


export default defineComponent({
    name: 'MetricsSelector',
    props: {
        metrics: {
            type: Array as PropType<ScoreFilterWithColor[]>,
            default: () => { return [] }
        },
        width: String,
        allowNewMetric: {
            type: Boolean,
            default: false
        }
    },
    components: {
      "value-slider": ValueSlider,
      "flag-label": FlagLabel,
    },
    mixins: [WithColorMixin],
    data () {
        return {
          newMetric: {} as NewMetric,
          loading: false,
        }
    },
    mounted () {
      this.resetNewMetric()
    },
    computed: {
      metricsByCategory() {
        let map: {[key: string]: ScoreFilterWithColor[]} = {}
        this.metrics.forEach(
          (scoreFilterWithColor: ScoreFilterWithColor) => {
            const category = scoreFilterWithColor.filter.metric.category
            if (category in map)
              map[category].push(scoreFilterWithColor)
            else
              map[category] = [scoreFilterWithColor]
          }
        )
        return map
      }
    },
    methods: {
        ...mapActions(useMetrics, ["addMetric"]),
        editMetric (metricWithValue: ScoreFilterWithColor) {
          if (!metricWithValue.selected) {
            this.selectMetric(metricWithValue)
          }
          else {
            metricWithValue.selected = false
            this.$emit("metricUnselected", metricWithValue)
          }
        },
        selectMetric (metricWithValue: ScoreFilterWithColor) {
          metricWithValue.selected = true
          this.$emit("metricSelected", metricWithValue)
        },
        toggleNewMetricType () {
          this.newMetric.type = this.newMetric.type === MetricType.value ? MetricType.flag : MetricType.value
        },
        async addNewMetric() {
          if (this.allowNewMetric) {
            this.loading = true
            await this.addMetric(this.newMetric).finally(() => { this.loading = false })

            this.resetNewMetric()
          }
        },
        resetNewMetric () {
          this.newMetric = {
            name: "New Metric",
            type: MetricType.value,
            category: "other",
          }
        },
        clickOutside() {
          this.$emit("clickOutside")
        }
    }
});
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

div.categoryAndMetricsContainer {
  display: flex;
  flex-direction: column;
}

div.metricContainer {
  display: flex;
  width: v-bind("width");
  margin-left: 10px;
  justify-content: space-between;
}

div.metric {
  align-self: center;
}

span.metric {
  text-align: left;
  font-size: 1.3pc;
  width: 100px;
}

span.category {
  text-align: left;
  margin-left: 60px;
  color: var(--lightgrey);
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
  color: var(--darkgrey);
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
