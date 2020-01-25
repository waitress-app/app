<template>
  <div class="c-tabs" :style="{'width': `${items.length * 100}px`}">
    <div class="c-tabs__item"
      :class="{'c-tabs__item--active': item === value}"
      @click="$emit('input', item)"
      v-for="item in items"
      :key="item">
      {{ item }}
    </div>
    <div class="c-tabs__slider" :style="{'transform': `translateX(${items.findIndex(elem => elem === value) * 100}px)`}"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    items: {
      type: Array
    }
  }
}
</script>

<style lang="stylus">
.c-tabs
  display flex
  align-items center
  position relative
  height 45px
  margin auto
  &__item
    text-align center
    flex 1
    color #8790a9
    transition color .3s cubic-bezier(.25,.8,.5,1)
    cursor pointer
    &--active
      color #8b68f1
      cursor default
  &__slider
    position absolute
    left 0
    bottom 0
    width 100px
    height 4px
    background linear-gradient(135deg, #bc4cf6, #7873ef)
    border-radius 2px
    transition .3s cubic-bezier(.25,.8,.5,1)
</style>
