<template>
  <CModal v-model="open">
    <div class="c-customer-options">
      <div class="c-customer-options__avatar">
        <CAvatar :src="storedCustomer.avatar" size="64"/>
      </div>
      <div class="c-customer-options__name">
        {{ storedCustomer.name }}
      </div>
      <div class="c-customer-options__button c-link">
        {{ bill | currency }}
      </div>
      <div class="c-customer-options__button c-link" @click="billingPayment">
        Finalizar a conta
      </div>
    </div>
  </CModal>
</template>

<script>
import CAvatar from '@/components/core/Avatar'
import CModal from '@/components/core/Modal'
import { mapGetters, mapActions } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  components: {
    CModal,
    CAvatar
  },
  data () {
    return {
      storedCustomer: {}, // prevent double img requests && animation erros
      tips: true
    }
  },
  methods: {
    ...mapActions('table', ['checkout']),
    async billingPayment () {
      await this.checkout({
        customer: this.customerId,
        total: this.bill,
        tips: this.tips
      })
      this.open = false
    }
  },
  watch: {
    customer (value) {
      if (value.id) {
        this.storedCustomer = value
      }
    }
  },
  computed: {
    ...mapGetters('table', ['table', 'orders']),
    customerId () {
      return this.$route.query.customer
    },
    customer () {
      return this.open ? this.table.customers.find(elem => elem.id === this.customerId) : {}
    },
    bill () {
      if (!this.storedCustomer.id) return 0
      return this.orders.reduce((acc, order) => {
        if (order.share.find(customer => customer === this.storedCustomer.id)) {
          return acc + (1 / order.share.length * order.total)
        } else {
          return acc
        }
      }, 0)
    },
    open: {
      get () {
        return this.$route.query.checkout !== undefined
      },
      set (value) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-customer-options
  margin auto
  display flex
  width 240px
  padding 15px
  flex-direction column
  &__avatar
    position absolute
    margin-left -32px
    top -32px
    left 50%
  &__name
    margin-top 20px
    margin-bottom 8px
    font-size 24px
    text-align center
  &__button
    padding 15px
    text-align center
    border-bottom 1px solid #d7d7d7
    color #8790a9
    &:last-child
      border-bottom none
</style>
