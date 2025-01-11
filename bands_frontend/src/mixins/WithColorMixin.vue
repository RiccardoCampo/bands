<script>

export default {
    name: 'WithColorMixin',
    props: {
        color: String
    },
    computed: {
      lightColor () {
        return `var(--light${this.color})`
      },
      darkColor () {
        return `var(--dark${this.color})`
      }
    }
}

</script>
  