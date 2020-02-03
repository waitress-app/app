<template>
  <transition name="fade">
    <div class="c-modal" v-show="value">
      <div class="c-modal__backdrop" @click="$emit('input', false)"></div>
      <div class="c-modal__paper" :class="{'c-modal__paper--visible': value}">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>

<style lang="stylus">
.c-modal
  overflow hidden
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  z-index 99
  display flex
  align-items center
  &__paper
    margin auto
    padding 10px
    background white
    border-radius 8px
    position relative
    @media screen and (max-width: 740px)
      border-bottom-right-radius 0
      border-bottom-left-radius 0
      position absolute
      bottom 0
      left 0
      right 0
      transition all .3s ease-in-out
      transform translateY(100%)
      &--visible
        transform translateY(0)
  &__backdrop
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    z-index -1
    background #04040429
</style>
