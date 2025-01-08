<template>
    <div class="mainScoreContainer" @mouseleave="resetScore()">
        <button class="score" v-for="index in 5" :key="index" @click="setScore(index)" @mouseenter="setDisplayScore(index)">
          <star-filled-icon v-if="index <= displayScore" :height="24" :width="24" :iconColor="color"/>
          <star-icon v-else :height="24" :width="24" :iconColor="color"/>
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
        displayScore: this.modelValue,
    }
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
  },
  watch: {
    modelValue(newValue) {
      this.score = newValue
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
