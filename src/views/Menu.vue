<template>
  <div class="c-menu">
    <div class="c-menu__no-items" v-if="menu === null && !loading">
      <h3 class="headline">
        Nenhum produto disponível
      </h3>
      <CButton>Cadastrar</CButton>
    </div>
    <CMenuCard v-for="(item, index) in menu" :key="index" :item="item"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CButton from '@/components/core/Button'
import CMenuCard from '@/components/MenuCard'
export default {
  components: {
    CButton,
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
    ...mapGetters('menu', ['menu'])
  },
  mounted () {
    this.loadMenu()
  }
}
</script>

<style lang="stylus">
.c-menu
  display flex
  flex-wrap wrap
  flex 1
  justify-content space-evenly
  @media screen and (min-width: 740px)
    max-width 724px
    margin auto
  @media screen and (min-width: 1040px)
    justify-content space-between
    max-width 1184px
  &__no-items
    text-align center
    color #cdcad6
</style>
