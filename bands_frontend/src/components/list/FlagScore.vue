<template>
  <check-icon v-if="checked" height="32" width="32" iconColor="var(--darkgreen)"></check-icon>
  <cross-icon v-else height="32" width="32" iconColor="var(--darkred)"></cross-icon>
  <p style="font-size: 1.4pc; position: relative; top: -18px">{{ label }}</p>
</template>
  
<script>

export default {
  name: 'FlagScore',
  props: {
      score: Object
  },
  computed: {
    label () {
      return this.score.metric
    },
    checked () {
      return Boolean(this.score.value);
    }
  }
}

</script>
