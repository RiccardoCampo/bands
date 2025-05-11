<template>
    <div class="container">
      <img v-if="localArtist.image_url" :src="localArtist.image_url" class="artistImage">
      <div v-else class="artistImage" :style="{ 'background-color': darkColor }"></div>
      <div class="details">
        <div class="header">
          <p class="name" v-if="!editing">
            {{ localArtist.name }}
          </p>
          <input v-else class="input name" v-model="localArtist.name">
          <a v-if="!editing" :href="localArtist.spotify_url" target="_blank" class="link">
            <external-link height="32" width="32"></external-link>
          </a>
          <main-score v-model="mainScore.value" :color="darkColor" :active="editing"></main-score>
        </div>
        <div v-if="editing" class="link">
          <span class="link">Image URL</span>
          <input class="input link" v-model="localArtist.image_url">
        </div>
        <div v-if="editing" class="link">
          <span class="link">Spotify URL</span>
          <input class="input link" v-model="localArtist.spotify_url">
        </div>
        <div class="scores">
          <div v-for="score in scores" :key="score" class="score">
            <value-slider v-if="score.type == 'value'" v-model="score.value" :color="score.color" :label="score.metric" :active="editing" @discardMetric="removeScore(score)"></value-slider>
            <flag-check v-else v-model="score.value" :label="score.metric" :active="editing" @discardMetric="removeScore(score)"></flag-check>
          </div>
        </div>
        <button v-if="editing" class="button edit" @click="toggleMetricsPanel" title="Add Score">
          <plus-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
        </button>
        <metric-selector v-if="editing && metricsPanelActive" width="300px" :color="color" :metrics="newMetrics" :allowNewMetric="true" @metricSelected="addScore" />
        <div class="actions">
          <button v-if="editing" class="button confirm" @click="edit" title="Confirm Changes">
            <check-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
          </button>
          <button v-if="editing" class="button discard" @click="toggleEdit" title="Discard Changes">
            <cross-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
          </button>
          <button v-if="!editing" class="button edit" @click="toggleEdit" title="Edit Artist">
            <edit-icon :height="26" :width="26"/>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import ColorsMixin from '@/mixins/ColorsMixin.vue';
import MainScore from './MainScore.vue';
import ValueSlider from '../metrics/ValueSlider.vue';
import FlagCheck from '../metrics/FlagCheck.vue';
import { mapActions, mapState } from 'pinia';
import { useArtistsList } from '@/store/ArtistsList';
import { usePageStatus } from '@/store/PageStatus';
import MetricsSelector from '../MetricsSelector.vue';
import { useMetrics } from '@/store/Metrics';
import WithColorMixin from '@/mixins/WithColorMixin.vue';



export default {
  name: 'ListElement',
  props: {
      artist: Object,
      new: Boolean,
  },
  components: {
    "main-score": MainScore,
    "value-slider": ValueSlider,
    "flag-check": FlagCheck,
    "metric-selector": MetricsSelector,
  },
  mixins: [ColorsMixin, WithColorMixin],
  data () {
    return {
      editing: false,
      name: "",
      localArtist: "",
      mainScore: {},
      scores: [],
      backupArtist: {},
      metricsPanelActive: false,
      scoresToRemove: [],
    }
  },
  computed: {
    ...mapState(useMetrics, ['metrics']),
    newMetrics () {
      const currentMetrics = [...this.scores.map(score => score.metric), this.mainScore.metric]
      return this.metrics.filter((metric) => {return !currentMetrics.includes(metric.name)})
    }
  },
  methods: {
    ...mapActions(usePageStatus, ["hideNewArtist"]),
    ...mapActions(useArtistsList, ["addArtist", "updateArtist"]),
    toggleEdit () {
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
      if (this.new) {
        await this.addArtist(this.localArtist)
        this.hideNewArtist()
      }
      else {
        this.localArtist.scores = [...this.scores, this.mainScore]
        await this.updateArtist(this.localArtist, this.scoresToRemove)
        this.setScores()
        this.editing = false
      }
    },
    setScores () {
      this.scores = this.addColors(this.localArtist.scores.filter(score => score.category !== "main_score"))
      this.mainScore = this.localArtist.scores.filter(score => score.category == "main_score")[0]
      this.scoresToRemove = []
    },
    toggleMetricsPanel() {
      this.metricsPanelActive = !this.metricsPanelActive
    },  
    addScore(metric) {
      this.scores.push({
        metric: metric.name,
        value: 1,
        metricId: metric.id,
        type: metric.type,
        color: this.getColor(this.colorOffset + this.scores.length - 1)
      })
      this.toggleMetricsPanel()
    },
    removeScore(score) {  
      if (score.id != undefined)
        this.scoresToRemove.push(score.id)

      this.scores = this.scores.filter((checkScore) => { return checkScore.metric !== score.metric })
    }
  },
  mounted () {
    this.localArtist = this.new ? {name: "New Artist", scores: [{value: 1, type: 1, category: "main_score", metricId: this.metrics[0].id}]} : this.artist
    this.name = this.localArtist.name
    this.editing = this.new
    this.setScores()
  },
}

</script>

<style scoped>

div.container {
  display: flex;
  border-style: solid;
  border-width: 3px;
  border-color: v-bind("lightColor");
  margin-bottom: 10px;
}

.artistImage {
  margin: 8px 0px 8px 10px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 8px;
}

div.artistImage {
  flex-shrink: 0;
  background-color: v-bind("darkColor");
}

div.details {
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  margin-left: 20px;
}

div.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div.scores {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
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
}

div.link {
  margin-right: auto;
}

input.link {
  font-size: 1.5pc;
  width: 340px;
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
  margin-top: auto;
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
