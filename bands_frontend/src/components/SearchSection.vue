<template>
  <div class="searchContainer">
    <div class="search">
      <div class="searchInputOutline">
        <input class="search" v-model="text" :oninput="getAndDisplaySuggestedFilters" placeholder="type an artist or a metric..." @focus="activateSuggestedMetricsPanel">
      </div>

      <keyboard-events @keyupEnter="searchOnEnter"></keyboard-events>
      <button class="searchBar" @click="search" @keyup.enter="search" title="Search">
        <loading-icon v-if="loading" height="32" width="32" iconColor="inherit"/>
        <search-icon v-else height=30 width=30 iconColor="inherit"/>
      </button>
      
      <button class="searchBar chevron" @click="toggleFiltersPanel()" title="Show Score Filters">
        <chevron-up v-if="showFiltersPanel" height=32 iconColor="inherit"></chevron-up>
        <chevron-down v-else height=32 iconColor="inherit"></chevron-down>
      </button>

      <button class="searchBar plusButton" @click="showNewArtist()" title="Add New Artist">  
        <plus-icon height=32 width=28 iconColor="inherit"/>
      </button>
    </div>

    <metrics-selector v-if="showSuggestedMetricsPanel" width="calc(var(--searchBarWidth) + 92px)" color="yellow" style="left: -6px" :metrics="selectionMetrics" @metricSelected="addFilter" @metricUnselected="removeFilter" @clickOutside="deactivateSuggestedMetricsPanel"/>

    <div v-if="showFiltersPanel" class="filtersPanel">
      <span class="artistLikeThisName" v-if="artistsLikeThisName">Showing artists like: {{ artistsLikeThisName }}</span>
      <div class="selectedFilter" v-for="filter in selectedFilters" :key="filter.filter.metric.id">
        <value-slider
          v-if="filter.filter.metric.type === 'value'"
          v-model="filter.filter.filterValues"
          :label="filter.filter.metric.name"
          :color="filter.filter.metric.color"
          :active="true"
          :range="true"
          @discardMetric="removeFilter(filter)"
        />
        <flag-label
          v-else :label="filter.filter.metric.name"
          :color="filter.filter.metric.color"
          :active="true"
          @discardMetric="removeFilter(filter)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useArtistsList } from '@/store/artistsList';
import { useMetrics } from '@/store/metrics';
import { usePageStatus } from '@/store/pageStatus';
import { debounce } from '@/utils';
import { mapActions, mapState, storeToRefs } from 'pinia';
import ValueSlider from './metrics/ValueSlider.vue';
import FlagLabel from './metrics/FlagLabel.vue';
import MetricsSelector from './MetricsSelector.vue';
import KeyboardEvents from './helpers/KeyboardEvents.vue';
import { Metric } from '@/types/metrics';
import { defineComponent } from 'vue';
import { ScoreFilterWithColor } from './MetricsSelector.vue';


export default defineComponent({
  name: 'SearchSection',
  data () {
    return {
      text: "" as string,
      loading: false as boolean,
      filtersPanelActive: false as boolean,
      suggestedMetricsPanelActive: false as boolean,
      selectedFilters: {} as {[key: string]: ScoreFilterWithColor},
      suggestedMetrics: [] as Array<Metric>,
    }
  },
  setup() {
    const pageStatus = usePageStatus();
    const { artistsLikeThisName } = storeToRefs(pageStatus);

    return {
      artistsLikeThisName,
    };
  },
  components: {
    "metrics-selector": MetricsSelector,
    "value-slider": ValueSlider,
    "flag-label": FlagLabel,
    "keyboard-events": KeyboardEvents,
  },
  async mounted () {
    this.loading = true
    await this.fetchMetrics().catch((error) => {console.log(error); this.setError("Unable to fetch metrics: " + error.message)}).finally(
      () => {
        this.loading = false
        // Suggested filters won't be displayed if the metrics are loading.
        this.getSuggestedFilters()
      }
    )
  },
  methods: {
    ...mapActions(usePageStatus, ['startSearch', 'showNewArtist', 'setArtistLikeThisName', 'setError']),
    ...mapActions(useArtistsList, ['fetchArtists']),
    ...mapActions(useMetrics, ['fetchMetrics']),
    async search () {
      if (this.loading || !this.bannerDismissed)
        return

      this.setArtistLikeThisName("")
      this.toggleFiltersPanel(true)
      this.loading = true

      // Either search by metric or by text.
      if (Object.keys(this.selectedFilters).length > 0)
        this.text = ""

      await this.fetchArtists(this.text, Object.values(this.selectedFilters).map((filter) => {return filter.filter})).catch((error) => {console.log(error); this.setError("Unable to fetch artists: " + error.message)})

      this.startSearch()
      this.loading = false
      this.deactivateSuggestedMetricsPanel()
    },
    async searchOnEnter() {
      if (!this.headerMinimized || this.suggestedMetricsPanelActive || this.filtersPanelActive)
        await this.search()
    },
    toggleFiltersPanel(value: boolean | null = null) {
      // When the selected filters are empty the panel can only be switched off.
      if ((this.filtersPanelActive && !value) || Object.keys(this.selectedFilters).length > 0 || this.artistsLikeThisName) {
        if (value !== null)
          this.filtersPanelActive = value
        else
          this.filtersPanelActive = !this.filtersPanelActive
      }
    },
    getSuggestedFilters() {
      this.suggestedMetrics = this.metrics.filter((metric: Metric) => { return metric.name.toLowerCase().includes(this.text.trim().toLowerCase()) })
    },
    getAndDisplaySuggestedFilters() {
      debounce(
        () => {
          this.getSuggestedFilters()
        },
        300
      )()
      this.activateSuggestedMetricsPanel()
    },
    addFilter(metricWithValue: ScoreFilterWithColor) {
      this.selectedFilters[metricWithValue.filter.metric.id] = metricWithValue
    },
    removeFilter(metricWithValue: ScoreFilterWithColor) {
      delete this.selectedFilters[metricWithValue.filter.metric.id]
      if (Object.keys(this.selectedFilters).length === 0)
        this.filtersPanelActive = false
    },
    activateSuggestedMetricsPanel () {
      if (!this.loading) {
        this.suggestedMetricsPanelActive = true
      }
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
    ...mapState(usePageStatus, ['headerMinimized', 'artistsLikeThisName', 'bannerDismissed']),
    showSuggestedMetricsPanel(): boolean {
      return this.suggestedMetricsPanelActive
    },
    showFiltersPanel(): boolean {
      return !this.showSuggestedMetricsPanel && this.filtersPanelActive
    },
    searchOutlineColor(): string {
      return this.suggestedMetricsPanelActive ? "var(--darkyellow)" : "var(--darkred)"
    },
    selectionMetrics(): ScoreFilterWithColor[] {
      return [
        ...Object.values(this.selectedFilters),
        ...this.suggestedMetrics.filter(
          (metric: Metric) => {
            return !(metric.id in this.selectedFilters)
          }
        ).map(
          (metric: Metric) => {
            return {
              filter: {
                metric: metric,
                filterValues: {minValue: 0, maxValue: 5}
              },
              selected: false,
              range: true,
            }
          }
        )
      ]
    }
  },
  watch: {
    artistsLikeThisName(newValue, oldValue) {
      if (newValue) {
        this.selectedFilters = {}
        this.toggleFiltersPanel(true)
      } else if (!newValue && oldValue) {
        this.toggleFiltersPanel(false)
      }
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
    width: calc(var(--searchBarWidth) - 10px);
    height: 28px;
    outline: none;
    border-style: none;
    color: var(--darkgrey);
    z-index: 1;
    margin-top: 3px;
  }

  div.searchInputOutline {
    background-color: v-bind(searchOutlineColor);
    width: var(--searchBarWidth);
    height: 36px;
  } 

  input.search:focus {
    border-color: var(--darkyellow);
  }

  button.searchBar {
    background-color: var(--darkred); 
    stroke: var(--darkyellow);
    height: 36px;
    width: 36px;
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

  button.chevron {
    width: 28px;
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
    border-width: 3.2px;
    border-color: var(--darkred);
    width: calc(var(--searchBarWidth) + 94px);
    flex-wrap: wrap;
  }

  span.artistLikeThisName {
    font-size: 1.5pc;
    margin-left: 5px;
  }

</style>
