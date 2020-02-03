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
        Fazer pedido
      </div>
      <div class="c-customer-options__button c-link">
        Finalizar a conta
      </div>
    </div>
  </CModal>
</template>

<script>
import CAvatar from '@/components/core/Avatar'
import CModal from '@/components/core/Modal'
// import { mapActions } from 'vuex'
export default {
  components: {
    CModal,
    CAvatar
  },
  props: {
    customer: {
      type: Object
    }
  },
  model: {
    prop: 'customer'
  },
  data () {
    return {
      storedCustomer: {} // prevent double img requests && animation erros
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
    open: {
      get () {
        return this.customer.id !== undefined
      },
      set (value) {
        this.$emit('input', {})
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
