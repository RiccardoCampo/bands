<template>
    <div class="mainScoreContainer" @mouseleave="resetScore()">
        <button class="score" v-for="index in displayScore" :key="index" @click="setScore(index)" @mouseover="setDisplayScore(index)">
            <star-filled-icon :height="24" :width="24" :iconColor="color"></star-filled-icon>
        </button>
        <button class="score" v-for="index in (5 - displayScore)" :key="index" @click="setScore(index + displayScore)" @mouseenter="setDisplayScore(index + displayScore)">
            <star-icon :height="24" :width="24" :iconColor="color"></star-icon>
        </button>
    </div>
</template>

<script>    

export default {
  name: 'MainScore',
  props: {
      modelValue: Number,
      color: String,
      active: Boolean
  },
  data () {
    return {
        score: this.modelValue,
        displayScore: 4,
    }
  },
  updated () {
    this.score = this.modelValue
    this.displayScore = this.score
  },
  methods: {
    setScore(value) {
        if (this.active) {
            this.displayScore = value
            this.score = value

            this.$emit('update:modelValue', this.score)
        }
    },
    setDisplayScore(value) {
        if (this.active)
            this.displayScore = value
    },
    resetScore() {
        if (this.active)
            this.displayScore = this.score
    }
  }
}

</script>

<style scoped>

div.mainScoreContainer {
  display: flex;
  width: 200px;
  justify-self: right;
}

button.score {
  border: none;
  background: none;
}

</style>
