<template>
    <div class="metricsSelectorContainer">
      <div class="selectorPanel" >
        <div class="metric" v-for="metric in metrics" :key="metric">
          <span style="text-align: left; font-size: 1.3pc; flex-grow: 1;">
            {{ metric.name }}
          </span>
          <button class="metric" @click="selectMetric(metric)">
            <plus-icon height=28 width=28 iconColor="var(--darkgreen)"></plus-icon>
          </button>
        </div>  
      </div>
    </div>
</template>

<script>

export default {
    name: 'MetricsSelector',
    props: {
        metrics: Array,
        width: String,
        color: String
    },
    data () {
        return {
        }
    },
    methods: {
        selectMetric (metric) {
            this.$emit("metricSelected", metric)
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
  box-shadow: 2px 2px 2px v-bind("color");
}

div.metric {
  display: flex;
  width: v-bind("width");
  margin-left: 10px;
}

button.metric {
  border: none;
  transition: all 0.1s;
  background: none;
}

button.metric:hover {  
  background-color: var(--lightgreen);
}
button.metric:active {
  background-color: var(--cream);
}

</style>
