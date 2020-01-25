<script>
export default {
  render (h) {
    return h(
      'div',
      {
        class: {
          'c-paper': true
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
</style>
