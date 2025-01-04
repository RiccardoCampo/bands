<template>
    <div class="container">
      <img v-if="localArtist.image_url" :src="localArtist.image_url" class="artistImage">
      <div v-else class="artistImage" :style="{ 'background-color': darkColor }"></div>
      <div class="details">
        <div class="header">
          <p class="name">
            {{ localArtist.name }}
          </p>
          <a :href="localArtist.spotify_url" target="_blank" class="link">
            <external-link height="32" width="32"></external-link>
          </a>
          <main-score v-model="mainScore.value" :color="darkColor" :active="editing"></main-score>
        </div>
        <div class="scores">
          <div v-for="score in scores" :key="score" class="score">
            <value-slider v-if="score.type == 'value'" v-model="score.value" :color="score.color" :label="score.metric" :active="editing"></value-slider>
            <flag-check v-else v-model="score.value" :label="score.metric" :active="editing"></flag-check>
          </div>
        </div>
        <div class="actions">
          <button v-if="editing" class="button confirm" @click="edit()">
            <check-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"></check-icon>
          </button>
          <button v-if="editing" class="button discard" @click="toggleEdit()">
            <cross-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"></cross-icon>
          </button>
          <button v-if="!editing" class="button edit" @click="toggleEdit()">
            <edit-icon :height="26" :width="26"></edit-icon>
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
import { mapActions } from 'pinia';
import { useArtistsList } from '@/store/ArtistsList';



export default {
  name: 'ListElement',
  props: {
      artist: Object,
      color: String,
  },
  components: {
    "main-score": MainScore,
    "value-slider": ValueSlider,
    "flag-check": FlagCheck
  },
  mixins: [ColorsMixin],
  data () {
    return {
      editing: false,
      name: this.artist.name,
      localArtist: this.artist,
      mainScore: {value: 0},
      scores: [],
      backupArtist: {}
    }
  },
  computed: {
    lightColor () {
      return `var(--light${this.color})`
    },
    darkColor () {
      return `var(--dark${this.color})`
    }
  },
  methods: {
    ...mapActions(useArtistsList, ["updateArtist"]),
    toggleEdit () {
      if (this.editing) {
        this.localArtist = this.backupArtist
        this.setScores()
      } else {
        this.backupArtist = this.localArtist
      }

      this.editing = !this.editing
    },
    edit () {
      this.localArtist.scores = [...this.scores, this.mainScore]
      this.updateArtist(this.localArtist)
      this.setScores()
      this.editing = false
    },
    setScores () {
      this.scores = this.addColors(this.localArtist.scores.filter(score => score.category !== "main_score"))
      this.mainScore = this.localArtist.scores.filter(score => score.category == "main_score")[0]
      console.log(this.mainScore.value)
    }
  },
  mounted () {  
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
