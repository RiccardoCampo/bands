<template>
    <div style="width: 200px; justify-self: right;">
        <star-filled-icon v-for="index in score" :key="index" :height="24" :width="24" :iconColor="color"></star-filled-icon>
        <star-icon v-for="index in (5 - score)" :key="index" :height="24" :width="24" :iconColor="color"></star-icon>
    </div>
</template>
  
<script>

export default {
  name: 'MainScore',
  props: {
      score: Number,
      color: String
  },
}

</script>
