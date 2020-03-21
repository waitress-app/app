import { action } from '@storybook/addon-actions'
import Wrapper from './Wrapper.vue'
import CTableCard from '../src/components/TableCard'

export default {
  title: 'Components / Table Card',
  component: CTableCard
}
const table = {
  id: 'hash-service-id-1',
  number: '01'
}
const usingTable = {
  ...table,
  people: 3,
  arrival: '2020-01-26T01:52:17-03:00'
}
const tableCardMixin = {
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  methods: { action: action('clicked') }
}

export const ReadingMenu = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...usingTable,
        calling: false,
        action: 'menu'
      }
    }
  }
})

export const CallingWaiter = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...usingTable,
        calling: true,
        action: 'waiter'
      }
    }
  }
})

export const WaitingFood = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...usingTable,
        action: 'waiting'
      }
    }
  }
})

export const OrderReady = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...usingTable,
        calling: true,
        action: 'order-ready'
      }
    }
  }
})

export const AlreadyServed = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...usingTable,
        action: 'eating'
      }
    }
  }
})

export const RequestingPayment = () => ({
  ...tableCardMixin,
  data () {
    return {
      table: {
        ...usingTable,
        calling: true,
        action: 'bill'
      }
    }
  }
})

export const FreeTable = () => ({
  ...tableCardMixin,
  data () {
    return {
      table
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
