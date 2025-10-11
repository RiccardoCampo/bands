<template>
  <div class="searchContainer">
    <div class="search">
      <div class="searchInputOutline">
        <input class="search" v-model="text" :oninput="getSuggestedFilters" placeholder="type an artist or a metric..." @focus="activateSuggestedMetricsPanel" @blur="deactivateSuggestedMetricsPanel">
      </div>

      <keyboard-events @keyupEnter="searchOnEnter"></keyboard-events>
      <button class="searchBar" @click="search" @keyup.enter="search" title="Search">
        <loading-icon v-if="loading" height="32" width="32" iconColor="inherit"/>
        <search-icon v-else height=32 width=32 iconColor="inherit"/>
      </button>
      
      <button class="searchBar" @click="toggleFiltersPanel()" title="Show Score Filters">
        <chevron-up v-if="filtersPanelActive" height=32 iconColor="inherit"></chevron-up>
        <chevron-down v-else height=32 iconColor="inherit"></chevron-down>
      </button>

      <button class="searchBar plusButton" @click="showNewArtist()" title="Add New Artist">  
        <plus-icon height=32 width=28 iconColor="inherit"/>
      </button>
    </div>
    
    <metrics-selector v-if="showSuggestedMetricsPanel" width="496px" color="yellow" style="left: -56px" :metrics="Object.values(suggestedMetrics)" @metricSelected="addFilter"/>

    <div v-if="filtersPanelActive" class="filtersPanel">
      <div class="selectedFilter" v-for="filter in scoreFiltersWithColors" :key="filter.filter.metric.id">
        <value-slider v-if="filter.filter.metric.type === 'value'" v-model="filter.filter.filterValues" :label="filter.filter.metric.name" :color="filter.color" :active="true" :range="true" @discardMetric="removeFilter(filter.filter)"/>
        <flag-check v-else v-model="filter.filter.filterValues.minValue" :label="filter.filter.metric.name" :active="true" @discardMetric="removeFilter(filter.filter)"/>
      </div>
    </div>  
  </div>
</template>

<script lang="ts">
import { useArtistsList } from '@/store/artistsList';
import { useMetrics } from '@/store/metrics';
import { usePageStatus } from '@/store/pageStatus';
import { debounce } from '@/utils';
import { mapActions, mapState } from 'pinia';
import ValueSlider from './metrics/ValueSlider.vue';
import FlagCheck from './metrics/FlagCheck.vue';
import ColorsMixin from '@/mixins/ColorsMixin.vue';
import MetricsSelector from './MetricsSelector.vue';
import KeyboardEvents from './helpers/KeyboardEvents.vue';
import { ScoreFilter } from '@/types/score';
import { Metric } from '@/types/metrics';
import { defineComponent } from 'vue';


type ScoreFilterWithColor = {
  filter: ScoreFilter,
  color: string
}



export default defineComponent({
  name: 'SearchSection',
  data () {
    return {
      text: "" as string,
      loading: false as boolean,
      filtersPanelActive: false as boolean,
      suggestedMetricsPanelActive: true as boolean,
      selectedFilters: {} as {[key: string]: ScoreFilter},
      suggestedMetrics: {} as {[key: string]: Metric},
    }
  },
  components: {
    "metrics-selector": MetricsSelector,
    "value-slider": ValueSlider,
    "flag-check": FlagCheck,
    "keyboard-events": KeyboardEvents,
  },
  mixins: [
    ColorsMixin,
  ],
  async mounted () {
    this.loading = true
    await this.fetchMetrics().catch((error) => {console.log(error)}).finally(() => { this.loading = false })
  },
  methods: {
    ...mapActions(usePageStatus, ['activateList', 'showNewArtist']),
    ...mapActions(useArtistsList, ['fetchArtists']),
    ...mapActions(useMetrics, ['fetchMetrics']),
    async search () {
      if (this.loading)
        return

      this.toggleFiltersPanel(false)
      this.loading = true

      await this.fetchArtists(this.text, Object.values(this.selectedFilters)).catch((error) => {console.log(error)})

      this.activateList()
      this.loading = false
      this.deactivateSuggestedMetricsPanel()
    },
    async searchOnEnter() {
      if (!this.headerMinimized || this.suggestedMetricsPanelActive || this.filtersPanelActive)
        await this.search()
    },
    toggleFiltersPanel(value: boolean | null = null) {
      // When the selected filters are empty the panel can only be switched off.
      if ((this.filtersPanelActive && !value) || Object.keys(this.selectedFilters).length > 0) {
        if (value !== null)
          this.filtersPanelActive = value
        else
          this.filtersPanelActive = !this.filtersPanelActive
      }
    },
    getSuggestedFilters() {
      this.activateSuggestedMetricsPanel()
      debounce(
        () => {
          this.suggestedMetrics = {}
          this.metrics.forEach(
            (metric) => {
              if (metric.name.includes(this.text) && !(metric.name in this.selectedFilters))
                this.suggestedMetrics[metric.name] = metric
            }
          )
        },
        300
      )()
    },
    addFilter(metric: Metric) {
      this.selectedFilters[metric.name] = {metric, filterValues: {minValue: 1, maxValue: 5}}
      this.suggestedMetrics = {}
      this.text = ""
      this.toggleFiltersPanel(true)
    },
    removeFilter(scoreFilter: ScoreFilter) {
      delete this.selectedFilters[scoreFilter.metric.name]
      if (Object.keys(this.selectedFilters).length <= 0)
        this.toggleFiltersPanel(false)
    },
    activateSuggestedMetricsPanel () {
      this.suggestedMetricsPanelActive = true
    },
    deactivateSuggestedMetricsPanel () {
      debounce(
        () => {
          this.suggestedMetricsPanelActive = false
        },
        100
      )()
    },
  },
  computed: {
    ...mapState(useMetrics, ['metrics']),
    ...mapState(usePageStatus, ['headerMinimized']),
    showSuggestedMetricsPanel(): boolean {
      return this.suggestedMetricsPanelActive && this.text !== ""
    },
    searchOutlineColor(): string {
      return this.suggestedMetricsPanelActive ? "var(--darkyellow)" : "var(--darkred)"
    },
    scoreFiltersWithColors(): ScoreFilterWithColor[] {
      return this.addColorsToMap(Object.values(this.selectedFilters).map((filter: ScoreFilter) => {return {filter: filter}}))
    }
  }
});

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

  div.selectedFilter {
    margin-left: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  
  div.filtersPanel {
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
