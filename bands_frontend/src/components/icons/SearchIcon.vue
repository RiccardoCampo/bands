<template>
    <svg-icon :width="width" :height="height" :iconColor="iconColor">
        <circle cx="12" cy="12" r="8"></circle><line x1="22" y1="22" x2="17.65" y2="17.65"></line>
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
