<template>
  <div class="search">
    <input class="search"  v-model="text" placeholder="type an artist...">
    <button class="search" @click="search" @keyup.enter="search">
      <loading-icon v-if="loading" height="32" width="32" color="var(--darkyellow)"></loading-icon>
      <search-icon v-else height=32 width=32 iconColor="inherit"></search-icon>
    </button>
  </div>
</template>

<script>
import { useArtistsList } from '@/store/ArtistsList';
import { usePageStatus } from '@/store/PageStatus';
import { mapActions } from 'pinia';


export default {
  name: 'SearchSection',
  data () {
    return {
      text: "",
      loading: false,
    }
  },
  methods: {
    ...mapActions(usePageStatus, ['activateList']),
    ...mapActions(useArtistsList, ['fetchArtists']),
    async search () {
      this.loading = true

      await this.fetchArtists(this.text).catch((error) => {console.log(error)})

      this.activateList()
      this.loading = false
    }
  }
}

</script>

<style scoped>
div.search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
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

button.search {
  background-color: var(--darkred);
  stroke: var(--darkyellow);
  border: none;
  height: 35.8px;
  margin-left: -2px;
  transition: all 0.1s;
}

button.search:active {
  background-color: var(--darkyellow);
  stroke: var(--darkred);
}

</style>
