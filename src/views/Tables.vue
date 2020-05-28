<template>
  <div class="c-tables">
    <CTableCard
      v-for="(table, key) in tables"
      :key="key"
      @click="openTable"
      :table="table"
    />
    <CButton @click="createTable()" class="c-tables--button">
      Inserir mesa
    </CButton>
    <CTableOptions />
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import CTableOptions from '@/components/TableOptions'
import CTableCard from '@/components/TableCard'
import CButton from '@/components/core/Button'
export default {
  components: {
    CTableCard,
    CTableOptions,
    CButton
  },
  methods: {
    ...mapActions('table', ['addTable']),
    createTable () {
      const tableNumber = this.tables.length + 1
      this.addTable({
        number: tableNumber < 10 ? `0${tableNumber}` : `${tableNumber}`
      })
    },
    openTable (table) {
      if (table.arrivedAt) {
        this.$router.push({
          name: 'table',
          params: {
            id: table.id
          }
        })
        return
      }
      this.$router.push({
        name: 'tables-list',
        query: {
          tableId: table.id
        }
      })
    }
  },
  computed: {
    ...mapGetters('table', ['tables'])
  }
}
</script>

<style lang="stylus">
.c-tables
  display flex
  justify-content space-around
  flex-wrap wrap
  max-width 1175px
  margin auto
  &--button
    position fixed
    bottom 15px
    left 50%
    margin-left -47px
</style>
