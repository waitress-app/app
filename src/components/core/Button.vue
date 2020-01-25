<template>
  <button class="c-button" :class="{'c-button--disabled': disabled}" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean
    }
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
