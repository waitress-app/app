import { action } from '@storybook/addon-actions'
import Wrapper from './Wrapper.vue'
import CTableCard from '../src/components/TableCard'
import { table, arrivedAt, customers, orders, ordersReady, ordersReadyAndDelivered } from './table-fields'

export default {
  title: 'Components / Table Card',
  component: CTableCard
}

const tableCardMixin = {
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  methods: { action: action('clicked') }
}

export const FreeTable = () => ({
  ...tableCardMixin,
  data () {
    return {
      table
    }
  }
})

export const ReadingMenu = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        arrivedAt
      }
    }
  }
})

export const CallingWaiter = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        arrivedAt,
        calling: 'waiter'
      }
    }
  }
})

export const WaitingFood = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        customers,
        arrivedAt,
        orders
      }
    }
  }
})

export const OrderReady = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        customers,
        arrivedAt,
        orders: ordersReady
      }
    }
  }
})

export const OrderReadyCalling = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        customers,
        arrivedAt,
        orders: ordersReady,
        calling: 'order-ready'
      }
    }
  }
})

export const AlreadyServed = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        customers,
        arrivedAt,
        orders: ordersReadyAndDelivered
      }
    }
  }
})

export const RequestingPayment = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        customers,
        arrivedAt,
        orders: ordersReadyAndDelivered,
        calling: 'bill'
      }
    }
  }
})

export const ReservedTable = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...table,
        reservation: '2020-01-26T01:52:17-03:00'
      }
    }
  }
})
