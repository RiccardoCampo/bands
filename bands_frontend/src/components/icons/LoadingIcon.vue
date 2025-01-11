<template>
    <svg-icon :width="width" :height="height" :iconColor="iconColor">
        <line id="line1" x1="12" y1="2" x2="12" y2="6"></line>
        <line id="line2" x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        <line id="line3" x1="18" y1="12" x2="22" y2="12"></line>
        <line id="line4" x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line id="line5" x1="12" y1="18" x2="12" y2="22"></line>
        <line id="line6" x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line id="line7" x1="2" y1="12" x2="6" y2="12"></line>
        <line id="line8" x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
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

<style>
#line1 {
  animation: 1s show infinite;
}

#line2 {
  animation: 1s show infinite;
  animation-delay: 0.125s;
  opacity: 0.1;
}

#line3 {
  animation: 1s show infinite;
  animation-delay: 0.25s;
  opacity: 0.2;
}

#line4 {
  animation: 1s show infinite;
  animation-delay: 0.375s;
  opacity: 0.3;
}

#line5 {
  animation: 1s show infinite;
  animation-delay: 0.5s;
  opacity: 0.4;
}

#line6 {
  animation: 1s show infinite;
  animation-delay: 0.625s;
  opacity: 0.5;
}

#line7 {
  animation: 1s show infinite;
  animation-delay: 0.75s;
  opacity: 0.6;
}

#line8 {
  animation: 1s show infinite;
  animation-delay: 0.865s;
  opacity: 0.7;
}

@keyframes show {
  0%   { opacity: 1; }
  12.5%  { opacity: 0.8; }
  25.0%  { opacity: 0.7; }
  37.5%  { opacity: 0.6; }
  50.0%  { opacity: 0.5; }
  62.5%  { opacity: 0.4; }
  75.0%  { opacity: 0.3; }
  87.5%  { opacity: 0.2; }
  100.0%  { opacity: 0.1; }
}
</style>