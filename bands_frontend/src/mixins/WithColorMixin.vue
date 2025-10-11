<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WithColorMixin',
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    lightColor(): string {
      return `var(--light${this.color})`;
    },
    darkColor(): string {
      return `var(--dark${this.color})`;
    }
  }
});

</script>
