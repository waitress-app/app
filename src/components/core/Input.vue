<template>
  <input class="c-input-text" :class="{'c-input-text--block': block}" type="text" v-model="inputVal">
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-input-text
  padding 10px 20px
  border 1px solid #cccccc
  border-radius 25px
  font-size 18px
  height 24px
  transition all .3s ease
  outline none
  &:focus
    border-color #8d68f1
  &--block
    width calc(100% - 42px)
</style>
