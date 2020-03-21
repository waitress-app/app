import { action } from '@storybook/addon-actions'
import Wrapper from './Wrapper.vue'
import CTableCard from '../src/components/TableCard'

export default {
  title: 'Components / Table Card',
  component: CTableCard
}
const table = {
  id: 'hash-service-id-1',
  number: '01',
  people: 3,
  arrival: '2020-01-26T01:52:17-03:00',
  calling: false,
  action: 'menu'
}

export const ReadingMenu = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        ...table
      }
    }
  },
  methods: { action: action('clicked') }
})
export const CallingWaiter = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        ...table,
        calling: true,
        action: 'waiter'
      }
    }
  },
  methods: { action: action('clicked') }
})
export const WaitingFood = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        ...table,
        action: 'waiting'
      }
    }
  },
  methods: { action: action('clicked') }
})
export const OrderReady = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        ...table,
        calling: true,
        action: 'order-ready'
      }
    }
  },
  methods: { action: action('clicked') }
})
export const AlreadyServed = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        ...table,
        action: 'eating'
      }
    }
  },
  methods: { action: action('clicked') }
})
export const RequestingPayment = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        ...table,
        calling: true,
        action: 'bill'
      }
    }
  },
  methods: { action: action('clicked') }
})
