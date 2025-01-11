<template>
  <header-section></header-section>
  <search-section></search-section>
  <list-section v-if="listActive"></list-section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import HeaderSection from './components/HeaderSection.vue';
import ListSection from './components/list/ListSection.vue';
import SearchSection from './components/SearchSection.vue';
import { usePageStatus } from './store/PageStatus';

export default {
  name: 'BandsApp',
  components: {
    'header-section': HeaderSection,
    'search-section': SearchSection,
    'list-section':  ListSection,
  },
  mounted() {
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
    document.title = 'bands';
  },
  unmounted() {
    window.removeEventListener("resize", this.updateSize);
  },
  methods: {
    ...mapActions(usePageStatus, ['updatePageSize']),
    updateSize () {
      this.updatePageSize(document.documentElement.clientWidth, document.documentElement.clientHeight)
    }
  },
  computed: {
    ...mapState(usePageStatus, ['listActive'])
  }
}
</script>

<style>
#app {
  font-family: regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black);
}
</style>
