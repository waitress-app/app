<template>
  <transition name="fade">
    <div class="c-modal" v-show="value">
      <div class="c-modal__backdrop" @click="$emit('input', false)"></div>
      <div class="c-modal__paper">
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
  &__backdrop
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    z-index -1
    background #04040429
</style>
