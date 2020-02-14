<template>
  <CPaper class="c-progress-bar">
    <div class="c-progress-bar__progress" :style="{width: `${value}%`}"></div>
  </CPaper>
</template>

<script>
import CPaper from '@/components/core/Paper'
export default {
  components: {
    CPaper
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="stylus">
.c-progress-bar
    flex 1
    width 100%
    padding 2px
    margin 4px
    &__progress
      height 10px
      border-radius 8px
      background linear-gradient(135deg, var(--color-primary), var(--color-secundary))
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
</style>
