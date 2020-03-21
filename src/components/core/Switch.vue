<template>
  <div class="c-switch">
    <button class="c-switch__button" :class="{'c-switch__button--active': value}" @click="$emit('input', !value)"></button>
    <CProgressBar :value="value ? 100 : 0 "/>
  </div>
</template>

<script>
import CProgressBar from '@/components/core/ProgressBar'
export default {
  components: {
    CProgressBar
  },
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>

<style lang="stylus">
.c-switch
  position relative
  width 34px
  padding 4px 14px
  &__button
    cursor pointer
    outline none
    height 20px
    width 20px
    background #f3f3f3
    border-radius 100%
    border 1px solid #d2d2d2
    position absolute
    top 6px
    box-shadow -1px 1px 4px 1px hsla(0, 0%, 41%, 0.2)
    right -7px
    transform translateX(-35px)
    transition 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
    &--active
      transform translateX(-8px)
</style>
