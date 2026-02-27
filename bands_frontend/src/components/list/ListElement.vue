<template>
    <div class="container">
      <img v-if="localArtist.imageUrl" :src="localArtist.imageUrl" class="artistImage">
      <div v-else class="artistImage" :style="{ 'background-color': darkColor }"></div>
      <div class="header">
        <p class="name" v-if="!editing">
          {{ localArtist.name }}
        </p>
        <input v-else class="input name" v-model="localArtist.name">
        <div class="ratingAndLink">
          <artist-rating v-model="rating" :color="darkColor" :active="editing" style="margin-right: 20px"></artist-rating>
          <a v-if="!editing" :href="localArtist.linkUrl ?? ''" target="_blank" class="link">
            <external-link height="32" width="32"></external-link>
          </a>
        </div>
      </div>
      <div v-if="editing" class="links">
        <div class="link">
          <span class="link">Image URL</span>
          <input class="input link" v-model="localArtist.imageUrl">
        </div>
        <div class="link">
          <span class="link">Link URL</span>
          <input class="input link" v-model="localArtist.linkUrl">
        </div>
      </div>
      <div class="scores">
        <div v-for="score in Object.values(scores).sort((a, b) => a.metric.category.localeCompare(b.metric.category))" :key="score.metric.name + score.rerender" class="score">
          <value-slider v-if="isValue(score)" v-model="score.values" :color="score.metric.color" :label="score.metric.name" :active="editing" @discardMetric="removeScore(score)"/>
          <flag-label v-else style="margin-top: 10px" :label="score.metric.name" :color="score.metric.color" :active="editing" @discardMetric="removeScore(score)"/>
        </div>
        <button v-if="editing" class="button edit" style="margin-top: 8px" @click="toggleMetricsPanel" title="Add Score">
          <plus-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
        </button>
      </div>
      <metric-selector v-if="editing && metricsPanelActive" width="400px" :color="color" :metrics="selectionMetrics" :allowNewMetric="true" @metricSelected="addOrEditScore" @metricUnselected="removePanelScore" @clickOutside="toggleMetricsPanel"/>
      <div class="actions">
        <button v-if="editing" class="button confirm" @click="edit" title="Confirm Changes">
          <loading-icon v-if="loading" style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
          <check-icon v-else style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
        </button>
        <button v-if="editing" class="button discard" @click="toggleEdit" title="Discard Changes">
          <loading-icon v-if="loading" style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
          <cross-icon v-else style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
        </button>
        <button v-if="!editing" class="button edit" @click="toggleEdit" title="Edit Artist">
          <edit-icon :height="26" :width="26"/>
        </button>
        <button v-if="!editing" class="button edit" @click="artistsLikeThis" title="Artists like this">
          <sliders-icon :height="26" :width="26"/>
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import ArtistRating from './ArtistRating.vue';
import ValueSlider from '../metrics/ValueSlider.vue';
import FlagLabel from '../metrics/FlagLabel.vue';
import { mapActions, mapState } from 'pinia';
import { useArtistsList } from '@/store/artistsList';
import { usePageStatus } from '@/store/pageStatus';
import MetricsSelector, { ScoreFilterWithColor } from '../MetricsSelector.vue';
import { useMetrics } from '@/store/metrics';
import WithColorMixin from '@/mixins/WithColorMixin.vue';
import { ArtistAlreadyExistsError } from '@/exceptions';
import { PropType } from 'vue';
import { FilterValues, NewScore, Score } from '@/types/score';
import { MetricType, Metric } from '@/types/metrics';
import { Artist } from '@/types/artist';
import { defineComponent } from 'vue';
import { debounce } from '@/utils';


type ArtistScore = {
  scoreId?: number
  values: FilterValues,
  metric: Metric
  rerender: boolean
}


export default defineComponent({
  name: 'ListElement',
  props: {
      artist: Object as PropType<Artist>,
      new: Boolean,
  },
  components: {
    "artist-rating": ArtistRating,
    "value-slider": ValueSlider,
    "flag-label": FlagLabel,
    "metric-selector": MetricsSelector,
  },
  mixins: [WithColorMixin],
  data () {
    return {
      editing: false,
      name: "",
      localArtist: {} as Artist,
      rating: 1,
      scores: {} as {[key: string]: ArtistScore},
      backupArtist: {} as Artist,
      metricsPanelActive: false,
      scoresToRemove: [] as number [],
      loading: false,
    }
  },
  computed: {
    ...mapState(useMetrics, ['metrics']),
    selectionMetrics(): ScoreFilterWithColor[] {
      const currentMetricsIds = Object.keys(this.scores)
      const newMetrics = this.metrics.filter(
        (metric: Metric) => {return !currentMetricsIds.includes(metric.id.toString())}
      ).map(
        (metric) => {
          return {
            filter: {
              metric,
              filterValues: {
                minValue: 0,
                maxValue: 5,
              },
            },
            selected: false,
            range: false,
          };
        }
      )
      const scores = Object.values(this.scores).map((score) => {
        return {
          filter: {
            metric: score.metric,
            filterValues: score.values,
          },
          selected: true,
          range: false,
        }
      })
      return [...scores, ...newMetrics]
    }
  },
  methods: {
    ...mapActions(usePageStatus, ["hideNewArtist"]),
    ...mapActions(useArtistsList, ["addArtist", "updateArtist"]),
    toggleEdit () {
      if (this.loading)
        return

      if (this.new) {
        this.hideNewArtist()
        return
      }

      if (this.editing) {
        this.localArtist = this.backupArtist
        this.setScores()
      } else {
        this.backupArtist = this.localArtist
      }

      this.editing = !this.editing
    },
    async edit () {
      if (this.loading)
        return
      Object.values(this.scores).forEach(
        score => {
          const value = score.metric.type === MetricType.flag ? score.values.minValue : score.values.maxValue
          if (score.scoreId === undefined)
            this.localArtist.newScores.push({
              metricId: score.metric.id,
              value,
            })
          else
            this.localArtist.scores.push({
              id: score.scoreId,
              metric: score.metric.name,
              type: score.metric.type,
              value,
            })
        }
      )
      this.localArtist.rating = this.rating
      this.loading = true
      try {
        if (this.new) {
          await this.addArtist(this.localArtist)
                    .then(() => { this.hideNewArtist() })
                    .catch(
                      (error) => {
                        if (error instanceof ArtistAlreadyExistsError) {
                          console.log(error.message)
                        }
                      }
                    )
        }
        else {
          await this.updateArtist(this.localArtist, this.scoresToRemove)
          this.setScores()
          this.editing = false
        }
      } finally {
        this.loading = false
      }
    },
    setScores () {
      this.scores = {}
      const metricsMap: {[key: string]: Metric}  = {}
      this.metrics.map((metric) => { metricsMap[metric.name] = metric; })
      this.localArtist.scores.forEach((score) => {
        const metric: Metric = metricsMap[score.metric]
        this.scores[metric.id] = {
          scoreId: score.id,
          metric,
          values: metric.type === MetricType.flag ? {minValue: score.value, maxValue: 0} : {minValue: 0, maxValue: score.value},
          rerender: true
        }

        debounce(() => {
          this.scores[metric.id].rerender = false
        }, 300)()
      })
      this.rating = this.localArtist.rating
      this.scoresToRemove = []
    },
    toggleMetricsPanel() {
      this.metricsPanelActive = !this.metricsPanelActive
    },  
    addOrEditScore(score: ScoreFilterWithColor) {
      const metricId = score.filter.metric.id
      if (metricId in this.scores) {
        this.scores[metricId].values = score.filter.filterValues
        this.scores[metricId].rerender = true
        
        debounce(() => {
          this.scores[metricId].rerender = false
        }, 300)()
      } else {
        debounce(() => {
          this.scores[metricId] = {
            values: score.filter.filterValues,
            metric: score.filter.metric,
            rerender: false
          }
        }, 300)()
      }        
    },
    removeScore(score: ArtistScore) {  
      if (score.scoreId !== undefined)
        this.scoresToRemove.push(score.scoreId)

      delete this.scores[score.metric.id]
    },
    removePanelScore(score: ScoreFilterWithColor) {
      const existingScore = this.scores[score.filter.metric.id]
      if (existingScore !== undefined && existingScore.scoreId !== undefined)
        this.scoresToRemove.push(existingScore.scoreId)

      delete this.scores[score.filter.metric.id]
    },
    isValue(score: ArtistScore) {
      return score.metric.type === MetricType.value
    },
    artistsLikeThis () {
      if (this.localArtist.id)
        this.$emit("artistsLikeThis")
    }
  },
  mounted () {
    const newArtist = {name: "New Artist", scores: [] as Score[], rating: 1, newScores: [] as NewScore[]}
    this.localArtist = this.new ? newArtist : this.artist ?? newArtist
    this.name = this.localArtist.name
    this.editing = this.new
    this.setScores()
  },
});

</script>

<style scoped>

div.container {
  display: grid;
  border-style: solid;
  border-width: 3px;
  border-color: v-bind("lightColor");
  margin-bottom: 10px;
  column-gap: 30px;
  grid-template-columns: 180px auto;
}
@media (max-width: 600px) {
  div.container {
    column-gap: 0px;
    column-gap: 30px;
    grid-template-columns: 90px auto;
  }
}

.artistImage {
  grid-row-start: 1;
  grid-row-end: 10;
  margin: 8px 0px 8px 10px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 8px;
  object-fit: cover;
}
@media (max-width: 600px) {
  .artistImage {
    width: 90px;
    height: 90px;
    grid-row-end: 1;
  }
}

div.artistImage {
  background-color: v-bind("darkColor");
}

div.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 2;
}
@media (max-width: 600px) {
  div.header {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }
}
div.ratingAndLink {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

div.links {
  display: flex;
  flex-direction: column;
}
@media (max-width: 600px) {
  div.links {
    grid-column: 1 / span 2;
    justify-self: center;
  }
}

div.scores {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 20px
}
@media (max-width: 600px) {
  div.scores {
    grid-column: 1 / span 2;
  }
}

div.score {
  margin-right: 20px;
  margin-top: 0px;
}

p.name {
  text-align: left;
  font-size: 4pc;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0px;
  max-width: 500px;
}
@media (max-width: 600px) {
  p.name {
    font-size: 2.5pc;
  }
}

input.input  {
  font-family: regular;
  color: var(--black);
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  border: none;
  border-bottom: 2px solid v-bind("lightColor");
  background-color: var(--white);
}
input.input:focus {
  outline: none;
  border-bottom-color: v-bind("darkColor");
}

input.name {
  font-size: 4pc;
  font-weight: 500;
  width: 430px;
  margin-bottom: 10px
}
@media (max-width: 600px) {
  input.name {
    font-size: 2.5pc;
    width: 56vw;
  }
}

div.link {
  margin-right: auto;
}

input.link {
  font-size: 1.5pc;
  width: 340px;
} @media (max-width: 600px) {
  input.link {
    font-size: 1pc;
    width: 50vw;
  }
}

span.link {
  display: inline-block;
  text-align: left;
  min-width: 90px;
  font-weight: 500;
  font-size: 1.2pc;
}


a.link {
  color: var(--black);
}

a.link:hover {
  color: v-bind("darkColor")
}

a.link:active {
  color: v-bind("lightColor")
}


div.actions {
  grid-row: 10;
  grid-column: 2;
  margin-top: -20px;
  margin-right: 5px;
  display: flex;
  justify-content: flex-end;
  margin-right: 4px;
  margin-bottom: 4px
}

button.button {
  border: none;
  transition: all 0.1s;
  height: 32px;
  width: 32px;  
  background: none;
  margin-left: 4px;
  align-items: center;
}

button.edit {
  background-color: v-bind("lightColor");
  color: v-bind("darkColor");
}
button.edit:hover {  
  background-color: v-bind("darkColor");
  color: v-bind("lightColor");
} 
button.edit:active {
  background-color: v-bind("lightColor");
  color: v-bind("darkColor")
}

button.discard {
  background-color: var(--lightred);
  color: var(--darkred);
}
button.discard:hover {  
  background-color: var(--darkred);
  color: var(--lightred);
} 
button.discard:active {
  background-color: var(--lightred);
  color: var(--darkred)
}

button.confirm {
  background-color: var(--lightgreen);
  color: var(--darkgreen);
}
button.confirm:hover {  
  background-color: var(--darkgreen);
  color: var(--lightgreen);
} 
button.confirm:active {
  background-color: var(--lightgreen);
  color: var(--darkgreen);
}
</style>
