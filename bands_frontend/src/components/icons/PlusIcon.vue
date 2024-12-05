<template>
    <svg-icon :iconName="iconName" :width="width" :height="height" :iconColor="iconColor" viewBoxWidth=32 viewBoxHeight=32 strokeWidth=3>
        <line x1="16" y1="9" x2="16" y2="23"></line><line x1="9" y1="16" x2="23" y2="16"></line>
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
