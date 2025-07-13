<template>
  <div class="searchContainer">
    <div class="search">
      <div class="searchInputOutline">
        <input class="search" v-model="text" :oninput="getSuggestedMetrics" placeholder="type an artist or a metric..." @focus="activateSuggestedMetricsPanel" @blur="deactivateSuggestedMetricsPanel">
      </div>

      <button class="searchBar" @click="search" @keyup.enter="search" title="Search">
        <loading-icon v-if="loading" height="32" width="32" iconColor="inherit"/>
        <search-icon v-else height=32 width=32 iconColor="inherit"/>
      </button>
      
      <button class="searchBar" @click="toggleMetricsPanel()" title="Show Metric Filters">
        <chevron-up v-if="metricsPanelActive" height=32 iconColor="inherit"></chevron-up>
        <chevron-down v-else height=32 iconColor="inherit"></chevron-down>
      </button>

      <button class="searchBar plusButton" @click="showNewArtist()" title="Add New Artist">  
        <plus-icon height=32 width=28 iconColor="inherit"/>
      </button>
    </div>
    
    <metrics-selector v-if="showSuggestionsPanel" width="496px" color="yellow" style="left: -56px" :metrics="suggestedMetrics" @metricSelected="addMetric"/>

    <div v-if="metricsPanelActive" class="metricsPanel">
      <div class="selectedMetric" v-for="metric in addColorsToMap(selectedMetrics)" :key="metric">
        <value-slider v-if="metric.type == 'value'" v-model="metric.value" :label="metric.name" :color="metric.color" :active="true" :range="true" @discardMetric="removeMetric(metric)"/>
        <flag-check v-else v-model="metric.value" :label="metric.name" :color="metric.color" :active="true" @discardMetric="removeMetric(metric)"/>
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
import MetricsSelector from './MetricsSelector.vue';


export default {
  name: 'SearchSection',
  data () {
    return {
      text: "",
      loading: false,
      metricsPanelActive: false,
      suggestionsPanelActive: true,
      selectedMetrics: {},
      suggestedMetrics: {},
      inputIsActive: false,
    }
  },
  components: {
    "metrics-selector": MetricsSelector,
    "value-slider": ValueSlider,
    "flag-check": FlagCheck,
  },
  mixins: [
    ColorsMixin,
  ],
  async mounted () {
    await this.fetchMetrics().catch((error) => {console.log(error)})
  },
  methods: {
    ...mapActions(usePageStatus, ['activateList', 'showNewArtist']),
    ...mapActions(useArtistsList, ['fetchArtists', 'addPartialArtist']),
    ...mapActions(useMetrics, ['fetchMetrics']),
    async search () {
      this.toggleMetricsPanel(false)
      this.loading = true
      console.log(this.selectedMetrics)

      await this.fetchArtists(this.text, Object.values(this.selectedMetrics)).catch((error) => {console.log(error)})

      this.activateList()
      this.loading = false
      this.deactivateSuggestedMetricsPanel()
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
      this.activateSuggestedMetricsPanel()
      debounce(
        () => {
          this.suggestedMetrics = {}
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
      if (Object.keys(this.selectedMetrics).length <= 0)
        this.toggleMetricsPanel(false)
    },
    toggleInputActive () {
      this.inputIsActive = !this.inputIsActive
    },
    activateSuggestedMetricsPanel () {
      
      this.suggestionsPanelActive = true
    },
    deactivateSuggestedMetricsPanel () {
      debounce(
        () => {
          this.suggestionsPanelActive = false
        },
        100
      )()
    },
  },
  computed: {
    ...mapState(useMetrics, ['metrics']),
    showSuggestionsPanel() {
      return this.suggestionsPanelActive & this.text !== ""
    },
    searchOutlineColor() {
      return this.suggestionsPanelActive ? "var(--darkyellow)" : "var(--darkred)"
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
    border-style: none;
    color: var(--grey);
    z-index: 1; 
    transition: all 0.2s;
    margin-top: 3px;
  }

  div.searchInputOutline {
    background-color: v-bind(searchOutlineColor);
    width: 510px; 
    height: 36px;
  } 

  input.search:focus {
    border-color: var(--darkyellow);
  }

  button.searchBar {
    background-color: var(--darkred); 
    stroke: var(--darkyellow);
    border: none;
    height: 36px;
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
  
  div.metricsPanel {
    display: flex;  
    align-items: center;
    justify-content: left;
    border-style: none solid solid solid;
    border-color: var(--darkred);
    width: 606px;
    flex-wrap: wrap;
    transition: all 0.1s;
  }

</style>
