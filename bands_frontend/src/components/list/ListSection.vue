<template>
  <div v-if="hasResults" class="listContainer" @scroll="onScroll">
    <div class="list">
      <list-element v-if="newArtistActive" :new="true" color="green"></list-element>
      <list-element v-for="artist in addColors(artists)" :key="artist" :artist="artist" :color="artist.color" @artistsLikeThis="artistsLikeThis(artist)"></list-element>
    </div>
  </div>
  <p v-else class="noResults"> no search results :( </p>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import ListElement from './ListElement.vue';
import { usePageStatus } from '@/store/pageStatus';
import { useArtistsList } from '@/store/artistsList';
import { defineComponent } from 'vue';
import { addColors } from '@/utils';
import { Artist } from '@/types/artist'


export default defineComponent({
  name: 'ListSection',
  components: {
    'list-element': ListElement,
  },
  data () {
    return {
      fetchingPage: false as boolean
    }
  },
  computed: {
    ...mapState(usePageStatus, ['pageSize', 'newArtistActive', 'searchStarted', 'colorOffset', 'artistsLikeThisName']),
    ...mapState(useArtistsList, ['artists', 'page']),
    hasResults(): boolean {
      return this.artists.length > 0 || this.newArtistActive
    },
    listHeight (): string { 
      if (this.pageSize.width >= 600)
        return this.pageSize.height - 170 + 'px';
      return this.pageSize.height - 120 +  'px';
    }
  },
  methods: {
    ...mapActions(useArtistsList, ['fetchArtistsPage', 'fetchSimilarArtists']),
    ...mapActions(usePageStatus, ['setArtistLikeThisName', 'setError']),
    async onScroll(event: Event) {
      if (this.fetchingPage || !this.searchStarted || this.page === null)
        return
      this.fetchingPage = true
      const target = event.target as HTMLElement;
      const { scrollTop, clientHeight, scrollHeight } = target;
      // When page is 1 it will fetch the next page when half the scroll size is reached, when page is 2 at 3/4, page 3 at 5/6, etc.
      const toLoadRatio = 1 - 1 / ((this.page ?? 1) * 2)
      if (scrollTop + clientHeight >= scrollHeight * toLoadRatio) {
        await this.fetchArtistsPage().catch((error) => {console.log(error); this.setError("Unable to fetch artists page: " + error.message)})
      }
      this.fetchingPage = false
    },
    async artistsLikeThis(artist: Artist) {
      if (this.fetchingPage || !this.searchStarted || artist.id === undefined)
        return
      this.fetchingPage = true
      await this.fetchSimilarArtists(artist.id).catch((error) => {console.log(error); this.setError("Unable to fetch similar artists: " + error.message)})
      this.setArtistLikeThisName(artist.name)
      this.fetchingPage = false
    },
    addColors (array: any[]) {
        return addColors(array, this.colorOffset)
    },
  }
});

</script>

<style scoped>
div.listContainer {
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: v-bind("listHeight");
  overflow-y: scroll;
}

div.list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-top: 20px;
  max-width: 900px;
}

p.noResults {
  margin-top: 30px;
  font-size: 2pc;
}

</style>
