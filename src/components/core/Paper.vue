<script>
export default {
  props: {
    src: {
      type: [String, Object]
    }
  },
  methods: {
    link () {
      if (this.src) {
        this.$router.push(this.src)
      } else {
        this.$emit('click')
      }
    }
  },
  render (h) {
    return h(
      'div',
      {
        class: {
          'c-paper': true
        },
        on: {
          click: this.link
        }
      },
      this.$slots.default
    )
  }
}
</script>

<style lang="stylus">
.c-paper
  border 1px solid #f3f3f3
  box-shadow -3px 2px 4px 1px #68686817
  border-radius 8px
[data-theme="dark"]
  .c-paper
    border 1px solid #353535
    background #272727
    box-shadow -3px 2px 4px 1px rgba(14, 14, 14, 0.22)
</style>
