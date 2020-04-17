<template>
  <div class="c-details" v-if="table !== null">
    <div class="c-details-header">
      <div class="c-details-header__back-button c-link" @click="$router.push('/')">
        <CBackButton />
      </div>
      <div class="c-details-header__number pl-4 title" >
        Mesa #{{ table.number }}
      </div>
      <CSwitch class="c-details-header__calling" :value="table.calling !== ''" @input="turnOffCalling"/>
    </div>
    <CAddCustomer />
    <CCustomerOptions />
    <COrderMenu />
    <COrderDetails />
    <CCustomersList />
    <COrderList />
    <COrderCheckout />
  </div>
</template>

<script>
import CBackButton from '@/components/svg/BackButton'
import CSwitch from '@/components/core/Switch'
import CAddCustomer from '@/components/AddCustomer'
import CCustomerOptions from '@/components/CustomerOptions'
import COrderMenu from '@/components/OrderMenu'
import COrderDetails from '@/components/OrderDetails'
import COrderList from '@/components/OrderList'
import CCustomersList from '@/components/CustomersList'
import COrderCheckout from '@/components/OrderCheckout'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CBackButton,
    CAddCustomer,
    CSwitch,
    CCustomerOptions,
    COrderMenu,
    COrderDetails,
    COrderList,
    CCustomersList,
    COrderCheckout
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions('table', ['getTable', 'turnOffCalling'])
  },
  computed: {
    ...mapGetters('table', ['table'])
  },
  async mounted () {
    this.loading = true
    await this.getTable(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style lang="stylus">
.c-details
  display flex
  flex-direction column
  &-header
    display flex
    flex 1
    align-items center
    &__back-button
      cursor pointer
      width 18px
      height 18px
      flex-shrink 1
    &__number
      color #8790a9
      flex-grow 1
    &__calling
      flex-shrink 1
</style>
