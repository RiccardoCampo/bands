<template>
  <div v-if="this.hasResults" class="listContainer" @scroll="onScroll">
    <div class="list">
      <new-list-element v-if="newArtistActive"></new-list-element>
      <list-element v-for="artist in displayArtists" :key="artist" :artist="artist" :color="artist.color"></list-element>
    </div>
  </div>
  <p v-else class="noResults"> no search results :( </p>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import ListElement from './ListElement.vue';
import ColorsMixin from '@/mixins/ColorsMixin.vue';
import { usePageStatus } from '@/store/PageStatus';
import { useArtistsList } from '@/store/ArtistsList';
import NewListElement from './NewListElement.vue';


export default {
  name: 'ListSection',
  components: {
    'list-element': ListElement,
    'new-list-element': NewListElement,
  },
  mixins: [ColorsMixin],
  computed: {
    ...mapState(usePageStatus, ['pageSize', 'newArtistActive']),
    ...mapState(useArtistsList, ['artists']),
    ...mapActions(useArtistsList, ['fetchArtistsPage']),
    hasResults() {
      return this.artists.length > 0 || this.newArtistActive
    },
    displayArtists () {
      return this.addColors(this.artists)
    },
    listHeight () {
      return this.pageSize.height - 260 + 'px';
    }
  },
  methods: {
    async onScroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        await this.fetchArtistsPage.catch((error) => {console.log(error)})
      }
    }
  }
}

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
