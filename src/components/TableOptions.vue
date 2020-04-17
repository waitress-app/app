<template>
  <CModal v-model="open">
    <div class="c-customer-options">
      <div class="c-customer-options__button c-link" @click="setTableOpen">
        Abrir mesa
      </div>
      <div class="c-customer-options__button c-link" @click="reservation">
        Fazer reserva
      </div>
    </div>
  </CModal>
</template>

<script>
import CModal from '@/components/core/Modal'
import { mapActions } from 'vuex'
export default {
  components: {
    CModal
  },
  methods: {
    ...mapActions('table', ['openTable']),
    async setTableOpen () {
      await this.openTable(this.$route.query.tableId)
      this.$router.replace({
        name: 'table',
        params: {
          id: this.$route.query.tableId
        }
      })
    },
    reservation () {
      console.warn('not implemented')
    }
  },
  computed: {
    open: {
      get () {
        return this.$route.query.tableId !== undefined
      },
      set (value) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-customer-options
  margin auto
  display flex
  width 240px
  padding 15px
  flex-direction column
  &__avatar
    position absolute
    margin-left -32px
    top -32px
    left 50%
  &__name
    margin-top 20px
    margin-bottom 8px
    font-size 24px
    text-align center
  &__button
    padding 15px
    text-align center
    border-bottom 1px solid #d7d7d7
    color #8790a9
    &:last-child
      border-bottom none

</style>
