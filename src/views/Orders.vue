<template>
  <div class="c-orders">
    <div class="headline" v-if="!orders">
      Sem pedidos
    </div>
    <div v-for="order in orders" :key="order.id" class="c-orders--item">
      <div>
        {{ order.quantity }} - {{ order.item.text }}
      </div>
      <div>
        para: {{ order.customers.map(elem => elem.name).join(', ') }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('orders', ['orders'])
  }
}
</script>

<style lang="stylus">
.c-orders
  color #cdcad6
  &--item
    border-bottom 1px dashed gray
    margin-bottom 12px
    padding-bottom 12px
</style>
