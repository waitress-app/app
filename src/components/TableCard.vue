<template>
  <CPaper class="c-table c-link"
    @click="$emit('click', table)"
    :class="{'c-table--empty': table.customers.length === 0, 'c-table--calling': table.calling, 'c-table--reservation': table.reservation}">
    <template v-if="table.arrivedAt" @click="table.calling = true">
      <div class="c-table__people">
          {{ table.customers.length }} <span class="caption">pessoa{{ table.customers.length > 1 ? 's' : ''}}</span>
      </div>
      <div class="c-table__number">
        {{ table.number }}
      </div>
      <div class="c-table__action" :class="{'c-table__action--calling': table.calling}">
        <component :is="`c-${action}`" />
      </div>
      <div class="c-table__arrival caption">
        {{ table.arrivedAt | hours }}
      </div>
      <div class="c-table__billing" v-if="table.total">
        {{ table.total | currency }}
      </div>
    </template>
    <p v-else class="title">
      Mesa {{table.number}}
      <br>
      {{ table.reservation ? 'Reservada' : 'Livre' }}
    </p>
  </CPaper>
</template>

<script>
import CPaper from '@/components/core/Paper'
import CBill from '@/components/svg/Bill'
import CEating from '@/components/svg/Eating'
import CMenu from '@/components/svg/Menu'
import COrderReady from '@/components/svg/OrderReady'
import CWaiter from '@/components/svg/Waiter'
import CWaiting from '@/components/svg/Waiting'
import CCleaning from '@/components/svg/Cleaning'
export default {
  components: {
    CPaper,
    CBill,
    CEating,
    CMenu,
    COrderReady,
    CWaiter,
    CWaiting,
    CCleaning
  },
  props: {
    table: {
      type: Object
    }
  },
  computed: {
    haveCustomers () {
      return this.table.customers.length !== 0
    },
    haveOrders () {
      return this.table.orders.length !== 0
    },
    havePays () {
      return this.table.pays.length !== 0
    },
    action () {
      if (this.table.calling) {
        return this.table.calling
      }
      if (this.table.arrivedAt) {
        if (!this.haveOrders) {
          return 'menu'
        }
        const allOrdersDelivered = this.table.orders.every(elem => elem.delivered)
        if (!allOrdersDelivered) {
          const orderReady = this.table.orders.some(elem => elem.ready)
          return orderReady ? 'order-ready' : 'waiting'
        }
      }
      return 'eating'
    }
  },
  filters: {
    hours (value) {
      const date = value.toDate()
      return `${date.getHours()}:${date.getMinutes()}`
    }
  }
}
</script>

<style lang="stylus">
.c-table.c-paper.c-table--calling:before
  opacity 1

.c-table
  position relative
  cursor pointer
  color #8790a9
  padding 8px
  display flex
  flex-direction row
  flex-wrap: wrap
  flex-basis 150px
  height 180px
  margin-bottom 24px
  transition all .3s ease-in-out
  &:before
    border-radius inherit
    content ' '
    display block
    height 100%
    position absolute
    top 0
    opacity 0
    left 0
    width 100%
    z-index -100
    background linear-gradient(135deg,var(--color-primary),var(--color-secundary))
  &--empty
    display flex
    align-items center
    border-style dashed
    text-align center
    >p
      flex 1
  &--reservation
    background #f8f8f8!important
  &--calling
    color white!important
    border-style solid
    background-color transparent!important
  &__people
    flex-basis 50%
    font-size 30px
  &__number
    flex-basis 50%
    text-align right
    font-size 30px
  &__action
    flex: 1
    flex-basis 100%
    text-align center
    stroke: var(--color-primary);
    fill: var(--color-primary);
    margin 28px
    >svg
      height 60px
    &--calling
      fill white
  &__arrival
    flex 1
    flex-basis 50%
  &__billin
    flex 1
    flex-basis 50%
    text-align right
[data-theme="dark"]
  .c-table
    &--reservation
      background #3a3a3a!important
</style>
