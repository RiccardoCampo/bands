<template>
  <div class="container">
    <img v-if="artist.image_url" :src="artist.image_url" class="artistImage">
    <div v-else class="artistImage"></div>
    <div class="details">
      <input class="input name" v-model="artist.name">
      <div class="link">
        <span class="link">Image URL</span>
        <input class="input link" v-model="artist.image_url">
      </div>
      <div>
        <span class="link">Spotify URL</span>
        <input class="input link" v-model="artist.spotify_url">
      </div>
    </div>
    <div class="buttons">
      <button class="button discard" @click="discard()">
        <cross-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"></cross-icon>
      </button>
      <button class="button add" @click="add()">
        <check-icon style="margin-top: 1px; margin-left: -2px;" :height="28" :width="28"></check-icon>
      </button>
    </div>
  </div>
</template>
  
<script>
import ColorsMixin from '@/mixins/ColorsMixin.vue';
import { useArtistsList } from '@/store/ArtistsList';
import { usePageStatus } from '@/store/PageStatus';
import { mapActions } from 'pinia';


export default {
  name: 'NewListElement',
  mixins: [ColorsMixin],
  data () {
    return {
      color: "green",
      artist: {
        name: "My New Artist",
        image_url: "",
        spotify_url: "",
      }
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
    ...mapActions(usePageStatus, ['hideNewArtist']),
    ...mapActions(useArtistsList, ['addArtist']),
    discard() {
      this.hideNewArtist()
    },
    add() {
      this.addArtist(this.artist)
      this.hideNewArtist()
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

.artistImage {
  margin: 8px 0px 8px 10px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

div.artistImage {
  background-color: v-bind("darkColor")
}

div.details {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-bottom: 30px;
  align-items: flex-start;
  justify-content: space-between;
}

input.input  {
  font-family: regular;
  color: var(--black);  
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  border: none;
  border-bottom: 2px solid v-bind("lightColor");
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

div.buttons {
  display: flex;
  flex-direction: column;
  margin: 4px 4px 4px auto;
  justify-content: space-between;
}

button.button {
  border: none;
  transition: all 0.1s;
  height: 32px;
  width: 32px;
  background: none;
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

button.add {
  background-color: var(--lightgreen);
  color: var(--darkgreen);
}
button.add:hover {  
  background-color: var(--darkgreen);
  color: var(--lightgreen);
} 
button.add:active {
  background-color: var(--lightgreen);
  color: var(--darkgreen);
}

</style>
