<template>
  <div class="c-details" v-if="table !== null">
    <div class="c-details-header">
      <div class="c-details-header__back-button c-link" @click="$router.go(-1)">
        <CBackButton />
      </div>
      <div class="c-details-header__number pl-4 title" >
        Mesa #{{ table.number }}
      </div>
      <CSwitch class="c-details-header__calling" :value="table.calling" @input="turnOffCalling"/>
    </div>
    <CAddCustomer :code="table.code" v-model="addingCustomer" />
    <!-- refactor with routes #table/#customer/#item -->
    <CCustomerOptions v-model="selectedCustomer" @order="order = true"/>
    <COrderMenu v-model="order" />
    <COrderDetails :selectedCustomer="selectedCustomer" />
    <CShareWith />
    <div class="c-details-customers">
      <div class="c-details-customers__avatar c-link" v-for="customer in table.customers" :key="customer.id">
        <CAvatar :src="customer.avatar" size="48" class="c-link" @click="selectedCustomer = customer"/>
      </div>
      <div class="c-details-customers__avatar c-link" @click="addingCustomer = true">
        <CAvatar src="https://ui-avatars.com/api/?size=128&name=%2B&color=8d68f1&background=ffffff" size="48"/>
      </div>
    </div>
  </div>
</template>

<script>
import CBackButton from '@/components/svg/BackButton'
import CSwitch from '@/components/core/Switch'
import CAvatar from '@/components/core/Avatar'
import CAddCustomer from '@/components/AddCustomer'
import CCustomerOptions from '@/components/CustomerOptions'
import COrderMenu from '@/components/OrderMenu'
import COrderDetails from '@/components/OrderDetails'
import CShareWith from '@/components/ShareWith'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CBackButton,
    CAvatar,
    CAddCustomer,
    CSwitch,
    CCustomerOptions,
    COrderMenu,
    COrderDetails,
    CShareWith
  },
  data () {
    return {
      order: false,
      selectedCustomer: {},
      addingCustomer: false,
      loading: false
    }
  },
  methods: {
    ...mapActions('table', ['getTable']),
    turnOffCalling () {
      this.table.calling = false
    }
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
  &-customers
    display flex
    padding 12px
    margin-top 24px
    border-radius 50px
    box-shadow inset 4px 2px 7px 3px #eaeaea85
    overflow-x auto
    &__avatar
      flex-basis 58px
</style>
