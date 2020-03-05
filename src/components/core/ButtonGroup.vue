<template>
  <div class="c-button-wrapper">
    <span v-for="(button, index) in buttons" class="c-button-wrapper__button" :class="{'c-button-wrapper__button--active': index === value}" :key="index" @click="$emit('input', index)">
      {{ button.text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Object
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
.c-button-wrapper
  display flex
  &__button
    flex-grow 1
    padding 8px 0
    text-align center
    border 1px solid var(--color-primary)
    color var(--color-primary)
    border-left none
    transition all .3s
    cursor pointer
    &:first-child
      border-top-left-radius 8px
      border-bottom-left-radius 8px
      border 1px solid var(--color-primary)
    &:last-child
      border-top-right-radius 8px
      border-bottom-right-radius 8px
    &--active
      background var(--color-primary)
      color white
</style>
