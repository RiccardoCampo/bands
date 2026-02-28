<template>
    <div v-if="error" class="snackbar">
        <span>{{ error }}</span>
    </div>
</template>


<script lang="ts">
import { usePageStatus } from '@/store/pageStatus';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ErrorSnackBar',
    data () {},
    computed: {
        ...mapState(usePageStatus, ['error'])
    },
});
</script>

<style scoped>
div.snackbar {
  background-color: var(--lightred);
  outline: 2px solid var(--darkred);
  text-align: center;
  padding: 10px;
  position: fixed;
  z-index: 1;
  right: 3%;
  bottom: 50px; 
  width: 15%;
} @media (max-width: 600px) {
  div.snackbar {
    width: 70%;
    margin-right: -30%;
    right: 50%;
  }
}
</style>
