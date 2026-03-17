<template>
    <svg-icon :width="width" :height="height" viewBoxWidth=24 viewBoxHeight=24 :iconColor="iconColor" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg-icon>
</template>
<script lang="ts">

import SvgIcon from './SvgIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
      width: {
          type: [Number, String],
          default: 18
      },
      height: {
          type: [Number, String],
          default: 18
      },
      iconColor: {
          type: String,
          default: 'currentColor'
      }
  },
  components: {
    'svg-icon': SvgIcon,
  },
});

</script>
