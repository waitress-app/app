<template>
  <CModal v-model="open">
    <div class="c-customer-options">
      <div class="c-customer-options__avatar">
        <CAvatar :src="storedCustomer.avatar" size="64"/>
      </div>
      <div class="c-customer-options__name">
        {{ storedCustomer.name }}
      </div>
      <div class="c-customer-options__bill c-link">
        {{ bill * avaliableTips[tip].calc | currency }}
      </div>
      <div>
        <CButtonGroup :buttons="avaliableTips" v-model="tip" />
      </div>
      <div class="c-customer-options__button c-link mt-3" @click="billingPayment">
        Finalizar
      </div>
      <!-- <div class="c-customer-options__button c-link" @click="billingPayment">
        Dinheiro
      </div>
      <div class="c-customer-options__button c-link" @click="billingPayment">
        QR code
      </div>
      <div class="c-customer-options__button c-link" @click="billingPayment">
        Maquininha
      </div> -->
    </div>
  </CModal>
</template>

<script>
import CAvatar from '@/components/core/Avatar'
import CButtonGroup from '@/components/core/ButtonGroup'
import CModal from '@/components/core/Modal'
import { mapGetters, mapActions } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  components: {
    CModal,
    CAvatar,
    CButtonGroup
  },
  data () {
    return {
      storedCustomer: {}, // prevent double img requests && animation erros
      tip: '0',
      avaliableTips: {
        '0': {
          text: 'Sem',
          calc: 1
        },
        '1': {
          text: '10%',
          calc: 1.1
        },
        '2': {
          text: '11%',
          calc: 1.11
        },
        '3': {
          text: '12%',
          calc: 1.12
        },
        '4': {
          text: '13%',
          calc: 1.13
        }
      }
    }
  },
  methods: {
    ...mapActions('table', ['checkout']),
    async billingPayment () {
      await this.checkout({
        customer: this.customerId,
        total: this.bill,
        tips: (this.bill * this.avaliableTips[this.tip].calc) - this.bill
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
  &__bill
    padding 15px
    text-align center
    color #8790a9
    font-size 30px
  &__button
    padding 15px
    text-align center
    border-bottom 1px solid #d7d7d7
    color #8790a9
    &:last-child
      border-bottom none
</style>
