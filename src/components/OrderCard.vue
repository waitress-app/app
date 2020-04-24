<template>
  <CPaper class="c-order-item mb-7 c-link">
    <CButton v-if="order.table" class="c-order-item__table" @click="$router.push({ name: 'table', params: { id: order.table.id }})">
      Mesa #{{ order.table.number }}
    </CButton>
    <div class="c-order-item__name subtitle pl-3">
      {{ order.quantity }} x {{ order.item.text }}
      <div class="c-order-item__description pl-3">
        {{ order.notes }}
      </div>
    </div>
    <img :src="order.item.src" class="c-order-item__img"/>
    <div class="c-order-item__status" v-if="order.ready">
      <COrderReady />
    </div>
  </CPaper>
</template>

<script>
import COrderReady from '@/components/svg/OrderReady'
import CPaper from '@/components/core/Paper'
import CButton from '@/components/core/Button'
export default {
  components: {
    CPaper,
    CButton,
    COrderReady
  },
  props: {
    order: {
      type: Object
    }
  }
}
</script>

<style lang="stylus">
.c-order-item
  display flex
  padding 12px 15px
  flex-basis 100%
  position relative
  @media screen and (min-width: 740px)
    flex-basis 300px
  @media screen and (min-width: 1040px)
   flex-basis 350px
  &--unavaliable
    opacity .4
    &:after
      background #ffffffb3
      content "Indisponível"
      width 86px
      height 18px
      position absolute
      left 50%
      margin-left -88px
      top 54px
      color red
      padding 4px 65px 0px 65px
  &__img
    flex-shrink 1
    border-radius 8px
    flex-basis 54px
    min-width 54px
    height 54px
    box-shadow -4px 2px 4px 1px rgba(113, 113, 113, 0.15)
  &__name
    color var(--color-primary)
    flex-grow 1
    padding-top 24px
  &__table
    font-size 18px
    position absolute
    top -15px
    height 36px
  &__description
    line-height 1
    color #9da4b9
  &__status
    font-size: 11px
    line-height: 1
    position absolute
    top 40px
    right 52px
    background linear-gradient(135deg, var(--color-primary), var(--color-secundary));
    padding 5px
    border-radius 8px
    border-bottom-left-radius 8px
    color #e8e8e8
    >svg
      fill white
      width 20px
</style>
