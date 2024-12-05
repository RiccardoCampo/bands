<template>
    <svg-icon :iconName="iconName" :width="width" :height="height" :iconColor="iconColor" strokeWidth=2.5>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg-icon>
</template>
<script>

import SvgIcon from './SvgIcon.vue';

export default {
  props: {
      iconName: {
          type: String,
          default: 'box'
      },
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
