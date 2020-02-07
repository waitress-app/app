<template>
  <div class="c-customers">
    <div class="c-customers__avatar c-link" v-for="customer in activeCustomers" :key="customer.id">
      <CAvatar :src="customer.avatar" size="48" class="c-link" @click="$router.push({query: { customer: customer.id}})"/>
    </div>
    <div class="c-customers__avatar c-link" @click="$router.push({query: { newcustomer: true }})">
      <CAvatar src="https://ui-avatars.com/api/?size=128&name=%2B&color=8d68f1&background=ffffff" size="48"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CAvatar from '@/components/core/Avatar'

export default {
  components: {
    CAvatar
  },
  computed: {
    ...mapGetters('table', ['activeCustomers'])
  }
}
</script>

<style lang="stylus">
.c-customers
  display flex
  padding 12px
  margin-top 24px
  border-radius 50px
  box-shadow inset 4px 2px 7px 3px #eaeaea85
  overflow-x auto
  &__avatar
    flex-basis 58px
</style>
