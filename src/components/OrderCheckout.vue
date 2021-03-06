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
      <transition name="slide-fade" mode="out-in">
        <div v-if="!qrcode">
          <div v-if="bill !== 0 && !qrcode">
            <CButtonGroup :buttons="avaliableTips" v-model="tip" />
          </div>
          <div v-if="bill === 0">
            <div class="c-customer-options__button c-link mt-3" @click="billingPayment">
              Finalizar
            </div>
          </div>
          <div v-else class="text-center" key="list">
            <div class="caption  mt-4 mb-2">
              Pagar com
            </div>
            <div class="c-customer-options__button c-link" @click="billingPayment">
              Dinheiro
            </div>
            <div class="c-customer-options__button c-link" @click="qrcode = true">
              QR code
            </div>
            <div class="c-customer-options__button c-link" @click="billingPayment">
              Maquininha
            </div>
          </div>
        </div>
        <div v-else-if="!showqr" key="qrcode-list">
          <CQRcodeList @select="showqr = true" @cancel="qrcode = false" v-if="!showqr" style="height:200px;padding-top:42px"/>
        </div>
        <div v-else key="qrcode">
          <CQRcodePayment @approved="billingPayment" />
        </div>
      </transition>
    </div>
  </CModal>
</template>

<script>
import CAvatar from '@/components/core/Avatar'
import CButtonGroup from '@/components/core/ButtonGroup'
import CModal from '@/components/core/Modal'
import CQRcodeList from '@/components/QRcodeList'
import CQRcodePayment from '@/components/QRcodePayment'
import { mapGetters, mapActions } from 'vuex'
// import { mapActions } from 'vuex'
export default {
  components: {
    CModal,
    CAvatar,
    CButtonGroup,
    CQRcodeList,
    CQRcodePayment
  },
  data () {
    return {
      storedCustomer: {}, // prevent double img requests && animation erros
      qrcode: false,
      showqr: false,
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
        tips: (this.bill * this.avaliableTips[this.tip].calc) - this.bill,
        itemConsumed: this.itemConsumed
      })
      this.$router.go(-2)
    }
  },
  watch: {
    customer (value) {
      if (value.id) {
        this.storedCustomer = value
        this.qrcode = false
        this.showqr = false
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
    itemConsumed () {
      if (!this.storedCustomer.id) return []
      return this.orders.filter(order => {
        return order.share.find(customer => customer === this.storedCustomer.id)
      }).map(elem => {
        const consumed = {
          ...elem,
          item: {
            ...elem.item,
            paidFor: elem.share.length === 1 ? `${elem.item.quantity} * ${elem.item.text}` : `${elem.item.quantity} * ${elem.item.text} - (1/${elem.share.length})`
          },
          payment: 1 / elem.share.length * elem.total
        }
        delete consumed.customers
        return consumed
      })
    },
    bill () {
      if (!this.storedCustomer.id) return 0
      return this.itemConsumed.reduce((acc, item) => {
        return item.payment + acc
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
