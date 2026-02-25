<template>
    <svg-icon :width="width" :height="height" :iconColor="iconColor"  viewBoxWidth=24 viewBoxHeight=24>
        <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
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
