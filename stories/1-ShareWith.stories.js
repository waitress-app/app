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
        return [{ 'id': 'hash-customer-id-1', 'name': 'Renato Vicente', 'avatar': 'https://randomuser.me/api/portraits/men/11.jpg' }, { 'id': 'hash-customer-id-2', 'name': 'Gabriel Oliveira', 'avatar': 'https://randomuser.me/api/portraits/men/12.jpg' }, { 'id': 'hash-customer-id-3', 'name': 'Jessica Lima', 'avatar': 'https://randomuser.me/api/portraits/women/11.jpg' }, { 'id': 'hash-customer-id-4', 'name': 'Diogo Nakaruma', 'avatar': 'https://ui-avatars.com/api/?size=128&name=Diogo%20Nakaruma&color=fff&background=8d68f1' }]
      }
    }
  }
})

const allCustomers = store.getters['table/activeCustomers'].map(elem => elem.id)

const ShareWithMixin = {
  router,
  store,
  components: { Wrapper, CShareWith },
  template: `<Wrapper width="320">
    <CShareWith v-model="customers"></CShareWith>
  </Wrapper>`,
  mounted () {
    if (this.$route.query.share !== 'open') {
      this.$router.push({ query: { share: 'open' } })
    }
  }
}

export default {
  title: 'Components / Share With',
  component: CShareWith
}

export const AllCustomersSelected = () => ({
  ...ShareWithMixin,
  data () {
    return {
      customers: allCustomers
    }
  }
})

export const SomeCustomersSelected = () => ({
  ...ShareWithMixin,
  data () {
    return {
      customers: ['hash-customer-id-2', 'hash-customer-id-3']
    }
  }
})

export const NoCustomersSelected = () => ({
  ...ShareWithMixin,
  data () {
    return {
      customers: []
    }
  }
})
