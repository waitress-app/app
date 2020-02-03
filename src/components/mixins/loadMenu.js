import { mapGetters, mapActions } from 'vuex'
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
  methods: {
    ...mapActions('menu', ['getMenu']),
    async loadMenu () {
      this.loading = true
      await this.getMenu()
      this.loading = false
    }
  },
  computed: {
    ...mapGetters('menu', ['menu', 'menuTypes'])
  },
  mounted () {
    this.loadMenu()
  }
}
