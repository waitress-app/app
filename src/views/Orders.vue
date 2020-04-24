<template>
  <div class="c-order">
    <div class="headline" v-if="!orders">
      Sem pedidos
    </div>
    <COrderCard v-for="order in orders" :key="order.id" :order="order" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import COrderCard from '@/components/OrderCard'
export default {
  components: {
    COrderCard
  },
  computed: {
    ...mapGetters('orders', ['orders'])
  }
}
</script>

<style lang="stylus">
.c-order
  display flex
  flex 1
  justify-content space-evenly
  flex-direction row
  flex-wrap wrap
  color #cdcad6
  @media screen and (min-width: 740px)
    max-width 724px
    margin auto
  @media screen and (min-width: 1040px)
    justify-content space-between
    max-width 1184px
  &--item
    flex 1
    border-bottom 1px dashed gray
    margin-bottom 12px
    padding-bottom 12px
</style>
