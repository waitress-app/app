<template>
  <div class="c-orders">
    <div class="headline" v-if="!orders">
      Sem pedidos
    </div>
    <div v-for="order in orders" :key="order.id">
      {{ order }}
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
  text-align center
  color #cdcad6
</style>
