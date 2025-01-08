<template>
    <svg-icon :width="width" :height="height" :iconColor="iconColor" strokeWidth=2.5>
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg-icon>
</template>
<script>

import SvgIcon from './SvgIcon.vue';

export default {
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
}

</script>
