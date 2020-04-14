<template>
  <div class="c-tables">
    <CTableCard
      v-for="(table, key) in tables"
      :key="key"
      @click="openTable"
      :table="table"
    />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CTableCard from '@/components/TableCard'
export default {
  components: {
    CTableCard
  },
  methods: {
    openTable (table) {
      this.$router.push({
        name: 'table',
        params: {
          id: table.id
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
    justify-content space-between
    flex-wrap wrap
    max-width 1175px
    margin auto
</style>
