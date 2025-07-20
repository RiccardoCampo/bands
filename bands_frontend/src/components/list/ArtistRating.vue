<template>
    <div class="ratingContainer" @mouseleave="resetRating()">
        <button class="rating" v-for="index in 5" :key="index" @click="setRating(index)" @mouseenter="setDisplayRating(index)">
          <star-filled-icon v-if="index <= displayRating" :height="24" :width="24" :iconColor="color"/>
          <star-icon v-else :height="24" :width="24" :iconColor="color"/>
        </button>
    </div>
</template>

<script>    

export default {
  name: 'ArtistRating',
  props: {
      modelValue: Number,
      color: String,
      active: Boolean
  },
  data () {
    return {
        rating: this.modelValue,
        displayRating: this.modelValue,
    }
  },
  methods: {
    setRating(value) {
      if (this.active) {
        this.displayRating = value
        this.rating = value

        this.$emit('update:modelValue', this.rating)
      }
    },
    setDisplayRating(value) {
      if (this.active)
        this.displayRating = value
    },
    resetRating() {
      if (this.active)
        this.displayRating = this.rating
    }
  },
  watch: {
    modelValue(newValue) {
      this.rating = newValue
      this.displayRating = this.rating
    }
  }
}

</script>

<style scoped>

div.ratingContainer {
  display: flex;
  width: 200px;
  justify-self: right;
}

button.rating {
  border: none;
  background: none;
}

</style>
