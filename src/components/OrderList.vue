<template>
  <div>
    <ul class="c-order-list">
      <li class="c-order-list__item" v-for="order in orders" :key="order.id">
        <div class="c-order-list__details">
          <div class="c-order-list__name">
            {{ order.quantity }}x - {{ order.item.text }}
          </div>
          <div class="c-order-list__avatars py-2">
            <CAvatar size="16" :src="customer.avatar" v-for="customer in order.customers" :key="customer.id" />
          </div>
          <div>
            {{ order.notes }}
          </div>
        </div>
        <div class="c-order-list__price">
          {{ order.price }}
        </div>
      </li>
    </ul>
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
    ...mapGetters('table', ['orders'])
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
    display flex
    color #9a9a9a
  &__details
    flex-grow 1
  &__price
    flex-shrink 1
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
</style>
