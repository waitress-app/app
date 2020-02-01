<script>
export default {
  props: {
    disabled: {
      type: Boolean
    }
  },
  render (h) {
    return h('button', {
      class: {
        'c-button': true,
        'c-link': true,
        'c-button--disabled': this.disabled
      },
      on: {
        click: () => {
          if (this.disabled) return
          this.$emit('click')
        }
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="stylus">
.c-button
  border 0
  padding 8px 16px
  border-radius 8px
  color white
  box-shadow -1px 1px 4px 1px #00000038
  background linear-gradient(135deg,#bc4cf6,#7873ef)
  transition all .3s ease-in-out
  opacity 1
  outline none
  cursor pointer
  &--disabled
    background linear-gradient(135deg,#cccbcc,#5a5a5e)
    cursor default
  &:hover,
  &--disabled
    opacity .9
    box-shadow 0px 0px 0px 0px #00000038
</style>
