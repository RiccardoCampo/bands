<template>
    <div class="container">
      <img v-if="artist.image_url" :src="artist.image_url" class="artistThumb">
      <div v-else class="placeholder" :style="{ 'background-color': darkColor }"></div>
      <div class="details">
        <div class="header">
          <p class="name">
            {{ artist.name }}
          </p>
          <a :href="artist.spotify_url" target="_blank" class="link">
            <external-link height="32" width="32"></external-link>
          </a>
          <main-score :score="mainScore" :color="darkColor" style="justify-self: left;"></main-score>
        </div>
        <div class="scores">
          <div v-for="score in scores" :key="score" class="score">
            <value-score v-if="score.type == 'value'" :score="score" :color="score.color"></value-score>
            <flag-score v-else :score="score"></flag-score>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import ColorsMixin from '@/mixins/ColorsMixin.vue';
import FlagScore from './FlagScore.vue';
import MainScore from './MainScore.vue';
import ValueScore from './ValueScore.vue';



export default {
  name: 'ListElement',
  props: {
      artist: Object,
      color: String,
  },
  components: {
    "main-score": MainScore,
    "flag-score": FlagScore,
    "value-score": ValueScore
  },
  mixins: [ColorsMixin],
  data () {
    return {
    }
  },
  computed: {
    mainScore () {
      return this.artist.scores.filter(score => score.category == "main_score")[0].value
    },
    scores () {
      return this.addColors(this.artist.scores.filter(score => score.category !== "main_score"))
    },
    lightColor () {
      return `var(--light${this.color})`
    },
    darkColor () {
      return `var(--dark${this.color})`
    }
  }
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

div.details {
  display: flex;
  flex-direction: column;
  flex-grow: 10;
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
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0px;
}

p.name {
  text-align: left;
  font-size: 4pc;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 30px;
  max-width: 500px;
}

img.artistThumb {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 8px;
}

div.placeholder {
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 8px;
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

</style>
