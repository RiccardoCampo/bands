<template>
    <svg-icon :width="width" :height="height" :iconColor="iconColor"  viewBoxWidth=32 viewBoxHeight=32>
        <path :fill="iconColor" d="M14.655 3.84c.549-1.12 2.144-1.12 2.693 0l3.199 6.52l7.17 1.05c1.228.179 1.72 1.686.834 2.555l-5.195 5.096l1.224 7.183c.21 1.227-1.08 2.16-2.18 1.578l-6.399-3.385l-6.399 3.385c-1.1.582-2.389-.351-2.18-1.578l1.225-7.183l-5.196-5.096c-.885-.87-.394-2.376.834-2.556l7.17-1.048z"/>
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
