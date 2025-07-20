<template>
  <div></div>
</template>
  
<script>
  export default {
    created() {
      const component = this;
      this.handler = function (e) {
        if (e.key === "Enter")
            component.$emit('keyupEnter', e);
      }
      window.addEventListener('keyup', this.handler);
    },
    beforeUnmount() {
      window.removeEventListener('keyup', this.handler);
    }
  }
</script>
  
<style scoped>
  div {
    display: none;
  }
</style>
