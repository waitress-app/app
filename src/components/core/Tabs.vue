<template>
  <div class="c-tabs" :style="{'width': `${items.length * 100}px`}">
    <div class="c-tabs__item c-link"
      :class="{'c-tabs__item--active': item[dataValue] === value}"
      @click="$emit('input', item[dataValue])"
      v-for="item in items"
      :key="item[dataValue]">
      {{ item.text }}
    </div>
    <div class="c-tabs__slider" :style="{'transform': `translateX(${items.findIndex(elem => elem[dataValue] === value) * 100}px)`}"></div>
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
    },
    dataValue: {
      type: String,
      default: 'id'
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
      color var(--color-primary)
      cursor default!important
  &__slider
    position absolute
    left 0
    bottom 0
    width 100px
    height 4px
    background linear-gradient(135deg, var(--color-primary), var(--color-secundary))
    border-radius 2px
    transition .3s cubic-bezier(.25,.8,.5,1)
</style>
