import { mapGetters } from 'vuex'
import CMenuCard from '@/components/MenuCard'
export default {
  components: {
    CMenuCard
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('menu', ['menu', 'menuTypes'])
  }
}
