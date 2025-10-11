<template>
  <div></div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      handler: null as any | null, 
    };
  },
  created() {
    const component = this;
    this.handler = function (e: KeyboardEvent) {
      if (e.key === "Enter")
          component.$emit('keyupEnter', e);
    }
    window.addEventListener('keyup', this.handler);
  },
  beforeUnmount() {
    if (this.handler !== null) {
      window.removeEventListener('keyup', this.handler);
    }
  }
});
</script>
  
<style scoped>
  div {
    display: none;
  }
</style>
