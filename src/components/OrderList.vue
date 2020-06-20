<template>
  <div>
    <ul class="c-order-list">
      <li class="c-order-list__item" v-for="order in orders" :key="order.id">
        <div class="c-order-list__details">
          <div class="c-order-list__name" v-if="order.item">
            {{ order.quantity }}x - {{ order.item.text }}
          </div>
          <div class="c-order-list__avatars py-2">
            <CAvatar size="16" :src="customer.avatar" v-for="customer in order.customers" :key="customer.id" />
          </div>
          <div>
            {{ order.notes }}
          </div>
        </div>
        <div class="c-order-list__total">
          {{ order.total | currency }}
        </div>
      </li>
      <li class="c-order-list__item" v-for="pay in pays" :key="pay.id">
        <div class="c-order-list__details">
          <div class="c-order-list__name" v-if="pay.customer">
            {{ pay.customer.name }}
          </div>
          <div class="c-order-list__tips">
            (Gorjeta  {{pay.tips | currency}})
          </div>
        </div>
        <div class="c-order-list__total">
          {{ pay.total  }}
        </div>
      </li>
    </ul>
    <div>
      total da mesa: {{ subTotal | currency }}
    </div>
    <div class="headline" v-if="total !== 0">
      Total: {{ total | currency }}
    </div>
    <div v-else class="text-center mt-5" >
      <CButton @click="generateRecipt()">
        Gerar nota
      </CButton>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CAvatar from '@/components/core/Avatar'
import CButton from '@/components/core/Button'

export default {
  components: {
    CButton,
    CAvatar
  },
  methods: {
    ...mapActions('table', ['closeTable']),
    async generateRecipt () {
      this.loading = true
      await this.closeTable()
      this.loading = false
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters('table', ['orders', 'pays']),
    total () {
      const paid = this.pays.reduce((acc, elem) => elem.total + acc, 0)
      const notPaid = this.orders.reduce((acc, elem) => elem.total + acc, 0)
      return notPaid - paid
    },
    subTotal () {
      return this.orders.reduce((acc, elem) => elem.total + acc, 0)
    }
  }
}
</script>

<style lang="stylus">

.c-order-list
  padding 20px
  background #e8e8e8
  border-radius 8px
  align-items center
  &__item
    border-bottom 1px dashed
    margin-bottom 18px
    padding-bottom 10px
    display flex
    color #9a9a9a
    &:last-child
      border none
      margin-bottom 0
      padding-bottom 0
  &__details
    flex-grow 1
  &__total
    flex-shrink 1
  &__tips
    font-size 8px
  &__avatars
    height 16px
    >.c-avatar
      position absolute
      &:nth-child(2)
        margin-left 8px
      &:nth-child(3)
        margin-left 16px
      &:nth-child(4)
        margin-left 24px
      &:nth-child(5)
        margin-left 32px
[data-theme="dark"]
  .c-order-list
    background #272727
    border 1px solid #353535
    box-shadow -3px 2px 4px 1px rgba(14,14,14,0.22)
</style>
