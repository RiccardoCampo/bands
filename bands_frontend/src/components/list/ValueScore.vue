<template>
  <div class="background">
    <div class="main">
      <div class="bar"></div>
    </div>
  </div>
  <p style="font-size: 1.4pc;">{{ label }}</p>
</template>
  
<script>

export default {
  name: 'ValueScore',
  props: {
      score: Object,
      color: String,
  },
  computed: {
    label () {
      return this.score.metric
    },
    mainWidth () {
      return (this.score.value * 20) - 3 + "px"
    },
    mainColor () {
      return `var(--light${this.color})`
    },
    barPosition () {
      return this.mainWidth
    },
    offColor () {
      return `var(--dark${this.color})`
    }
  }
}

</script>

<style scoped>

div.background {
  background-color: v-bind("offColor");
  width: 100px;
  height: 15px;
  border: 2px;
  border-style: solid;
  border-color: v-bind("mainColor");
}

div.main {
  position: relative;
  background-color: v-bind("mainColor");  
  width: v-bind("mainWidth");
  height: 15px;
}

div.bar {
  position: relative;
  width: 3px;
  height: 17px;
  top: -1px;
  left: v-bind("barPosition");
  background-color: var(--white);
}

</style>
