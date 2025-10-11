<template>
    <svg-icon :width="width" :height="height" :iconColor="iconColor" viewBoxWidth=32 viewBoxHeight=32 strokeWidth=3>
        <line x1="22" y1="10" x2="10" y2="22"></line><line x1="10" y1="10" x2="22" y2="22"></line>
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
