<template>
  <header-section :minimized="headerSectionMinimized"></header-section>
  <search-section @searchClicked=minimizeHeaderSection></search-section>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import SearchSection from './components/SearchSection.vue';

export default {
  name: 'BandsApp',
  components: {
    'header-section': HeaderSection,
    'search-section': SearchSection
  },
  data()  {
    return {
      headerSectionMinimized: false,
    }
  },  
  methods: {
    minimizeHeaderSection() {
      this.headerSectionMinimized = true
    }
  }
}
</script>

<style>
#app {
  font-family: title;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black);
}
</style>
