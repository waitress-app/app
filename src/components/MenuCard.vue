<template>
  <CPaper class="c-menu-item mb-5" :class="{'c-menu-item--unavaliable': item.unavaliable}">
    <img :src="item.src" class="c-menu-item__img"/>
    <div class="c-menu-item__name subtitle pl-3">
      {{ item.text }}
      <div class="c-menu-item__description caption" style="
  line-height: 1;
">
        {{ item.description }}
      </div>
    </div>
  </CPaper>
</template>

<script>
import CPaper from '@/components/core/Paper'
export default {
  components: {
    CPaper
  },
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="stylus">
.c-menu-item
  display flex
  padding 12px 15px
  flex-basis 100%
  @media screen and (min-width: 740px)
    flex-basis 300px
  @media screen and (min-width: 1040px)
    flex-basis 29%
  &--unavaliable
    position relative
    opacity .4
    &:after
      background #ffffffb3
      content "Indisponível"
      width 86px
      height 18px
      position absolute
      left 50%
      margin-left -98px
      top 54px
      color red
      padding 4px 75px 0px 75px
  &__img
    flex-shrink 1
    border-radius 8px
    flex-basis 54px
    min-width 54px
    height 54px
    box-shadow -4px 2px 4px 1px rgba(113, 113, 113, 0.15)
  &__name
    color #8b68f1
    flex-grow 1
  &__description
    line-height 1
    color #9da4b9
</style>
