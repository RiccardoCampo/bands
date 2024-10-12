<template>
    <svg-icon :iconName="iconName" :width="width" :height="height" :iconColor="iconColor" viewBoxWidth=32 viewBoxHeight=32 strokeWidth=3>
        <polyline points="20 6 9 17 4 12"></polyline>
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
