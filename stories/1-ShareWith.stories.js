import Wrapper from './Wrapper.vue'
import useRouter from './useRouter'
import useVuex from './useVuex'
import CShareWith from '../src/components/ShareWith'

const router = useRouter()
const store = useVuex({
  table: {
    namespaced: true,
    getters: {
      activeCustomers () {
        return [{ 'id': 'hash-customer-id-1', 'name': 'Renato Vicente', 'avatar': 'https://randomuser.me/api/portraits/men/11.jpg' }, { 'id': 'hash-customer-id-2', 'name': 'Diogo Nakaruma', 'avatar': 'https://ui-avatars.com/api/?size=128&name=Diogo%20Nakaruma&color=fff&background=8d68f1' }]
      }
    }
  }
})

export default {
  title: 'Components / Share With',
  component: CShareWith
}

export const ReadingMenu = () => ({
  router,
  store,
  components: { Wrapper, CShareWith },
  template: `<Wrapper width="320">
    <CShareWith v-model="customers"></CShareWith>
  </Wrapper>`,
  data () {
    return {
      customers: ['hash-customer-id-1']
    }
  },
  mounted () {
    this.$router.push({ query: { share: true } })
  }
})
