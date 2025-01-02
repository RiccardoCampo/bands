<template>
  <div class="searchContainer">
    <div class="search">
      <input class="search" v-model="text" :oninput="getSuggestedMetrics" placeholder="type an artist or a metric...">

      <button class="searchBar" @click="search" @keyup.enter="search">
        <loading-icon v-if="loading" height="32" width="32" iconColor="inherit"></loading-icon>
        <search-icon v-else height=32 width=32 iconColor="inherit"></search-icon>
      </button>
      
      <button class="searchBar" @click="toggleMetricsPanel()">
        <chevron-up v-if="metricsPanelActive" height=32 iconColor="inherit"></chevron-up>
        <chevron-down v-else height=32 iconColor="inherit"></chevron-down>
      </button>

      <button class="searchBar plusButton" @click="showNewArtist()">
        <plus-icon height=32 width=28 iconColor="inherit"></plus-icon>
      </button>
    </div>
    
    <div class="suggestedMetricsContainer">
      <div class="suggestedMetrics" v-if="showSuggestionsPanel">
        <div class="suggestedMetric" v-for="metric in suggestedMetrics" :key="metric">
          <span style="text-align: left; font-size: 1.3pc; flex-grow: 1;">
            {{ metric.name }}
          </span>
          <button class="suggestedMetric" @click="addMetric(metric)">
            <plus-icon height=28 width=28 iconColor="var(--darkgreen)"></plus-icon>
          </button>
        </div>  
      </div>
    </div>

    <div v-if="metricsPanelActive" class="metricsPanel">
      <div class="selectedMetric" v-for="metric in addColorsToMap(selectedMetrics)" :key="metric">
        <button class="selectedMetric" @click="removeMetric(metric)">
          <cross-icon style="margin-top: 0px; margin-left: -3px;" :height="18" :width="18" iconColor="var(--grey)"></cross-icon>
        </button>
        <value-slider v-if="metric.type == 'value'" v-model="metric.value" :label="metric.name" :color="metric.color" :active="true"></value-slider>
        <flag-check v-else v-model="metric.value" :label="metric.name" :color="metric.color" :active="true"></flag-check>
      </div>
    </div>  
  </div>
</template>

<script>
import { useArtistsList } from '@/store/ArtistsList';
import { useMetrics } from '@/store/Metrics';
import { usePageStatus } from '@/store/PageStatus';
import { debounce } from '@/utils';
import { mapActions, mapState } from 'pinia';
import ValueSlider from './metrics/ValueSlider.vue';
import FlagCheck from './metrics/FlagCheck.vue';
import ColorsMixin from '@/mixins/ColorsMixin.vue';


export default {
  name: 'SearchSection',
  data () {
    return {
      text: "",
      loading: false,
      metricsPanelActive: false,
      suggestionsPanelActive: true,
      selectedMetrics: {},
      suggestedMetrics: {}
    }
  },
  components: {
    "value-slider": ValueSlider,
    "flag-check": FlagCheck
  },
  mixins: [
    ColorsMixin,
  ],
  async mounted () {
    await this.fetchMetrics(this.text).catch((error) => {console.log(error)})
  },
  methods: {
    ...mapActions(usePageStatus, ['activateList', 'showNewArtist']),
    ...mapActions(useArtistsList, ['fetchArtists', 'addPartialArtist']),
    ...mapActions(useMetrics, ['fetchMetrics']),
    async search () {
      this.toggleMetricsPanel(false)
      this.loading = true

      await this.fetchArtists(this.text, Object.values(this.selectedMetrics)).catch((error) => {console.log(error)})

      this.activateList()
      this.loading = false
      this.suggestionsPanelActive = false
    },
    toggleMetricsPanel(value) {
      // When the selected metrics is empty the panel can only be switched off.
      if ((this.metricsPanelActive && !value) || Object.keys(this.selectedMetrics).length > 0) {
        if (value !== undefined)
          this.metricsPanelActive = value
        else
          this.metricsPanelActive = !this.metricsPanelActive
      }
    },
    getSuggestedMetrics() {
      this.suggestionsPanelActive = true

      debounce(
        () => {
          this.metrics.forEach(
            (metric) => {
              if (metric.name.includes(this.text) & !(metric.name in this.selectedMetrics) & metric.name != "score")
                this.suggestedMetrics[metric.name] = metric
            }
          )
        },
        300
      )()
    },
    addMetric(metric) {
      this.selectedMetrics[metric.name] = metric
      this.suggestedMetrics = {}
      this.text = ""
      this.toggleMetricsPanel(true)
    },
    removeMetric(metric) {
      delete this.selectedMetrics[metric.name]
      console.log(this.suggestedMetrics)
      console.log(Object.keys(this.selectedMetrics).length)
      if (Object.keys(this.selectedMetrics).length <= 0)
        this.toggleMetricsPanel(false)
    },
  },
  computed: {
    ...mapState(useMetrics, ['metrics']),
    showSuggestionsPanel() {
      return this.suggestionsPanelActive & this.text !== ""
    }
  }
}

</script>

<style scoped>
  div.searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  div.search {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  input.search {
    font-family: regular;
    font-size: 1.6pc;
    background-color: var(--white);
    width: 500px;
    height: 28px;
    outline: none;
    border-width: 3px;
    border-color: var(--darkred);
    border-style: solid;
    color: var(--grey);
    z-index: 1;
    transition: all 0.2s;
  }

  input.search:focus {
    border-color: var(--darkyellow);
  }

  button.searchBar {
    background-color: var(--darkred);
    stroke: var(--darkyellow);
    border: none;
    height: 35.8px;
    margin-left: -2px;
    transition: all 0.1s;
  }

  button.searchBar:hover {
    background-color: var(--darkyellow);
    stroke: var(--darkred);
  }

  button.searchBar:active {
    background-color: var(--darkred);
    stroke: var(--darkyellow);
  }
  
  button.plusButton {
    background-color: var(--darkred);
    stroke: var(--darkyellow);
  }

  button.plusButton:hover {
    background-color: var(--lightgreen);
    stroke: var(--darkgreen);
  }

  button.plusButton:active {
    background-color: var(--darkgreen);
    stroke: var(--lightgreen);
  }

  div.selectedMetric {
    margin-left: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  
  div.suggestedMetricsContainer {
    position: relative;
    left: -54px;  
    width: 500px;
  }

  div.suggestedMetrics {
    position: absolute;
    z-index: 100;
    background-color: var(--cream);
    box-shadow: 2px 2px 2px var(--darkyellow);
  }

  div.suggestedMetric {
    display: flex;
    width: 500px;
    margin-left: 10px;
  }

  button.suggestedMetric {
    border: none;
    transition: all 0.1s;
    border-radius: 25%;
    background: none;
  }

  button.suggestedMetric:hover {  
    background-color: var(--lightgreen);
  }
  button.suggestedMetric:active {
    background-color: var(--cream);
  }

  div.metricsPanel {
    display: flex;
    align-items: center;
    justify-content: left;
    border-style: none solid solid solid;
    border-color: var(--darkred);
    width: 600px;
    flex-wrap: wrap;
    transition: all 0.1s;
  }

  button.selectedMetric {
    border: none;
    transition: all 0.1s;
    border-radius: 25%;
    margin-left: 85px;
    margin-bottom: -20px;
    height: 20px;
    width: 20px;
    background: none;
  }

  button.selectedMetric:hover {  
    background-color: var(--lightred);
  }
  button.selectedMetric:active {
    background-color: var(--cream);
  }

</style>
