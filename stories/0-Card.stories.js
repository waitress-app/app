import { action } from '@storybook/addon-actions'
import Wrapper from './Wrapper.vue'
import CTableCard from '../src/components/TableCard'

export default {
  title: 'TableCard',
  component: CTableCard
}

export const Text = () => ({
  components: { Wrapper, CTableCard },
  template: `<Wrapper width="168">
    <CTableCard :table="table" @click="action"></CTableCard>
  </Wrapper>`,
  data () {
    return {
      table: {
        id: 'hash-service-id-1',
        number: '01',
        people: 3,
        arrival: '2020-01-26T01:52:17-03:00',
        calling: false,
        action: 'menu'
      }
    }
  },
  methods: { action: action('clicked') }
})
