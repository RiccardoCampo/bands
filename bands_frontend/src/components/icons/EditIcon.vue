<template>
    <svg-icon :iconName="iconName" :width="width" :height="height" :iconColor="iconColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
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
