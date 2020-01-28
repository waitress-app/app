<template>
  <div class="c-tables">
    <CTableCard
      v-for="(table, key) in tables"
      :key="key"
      @click="oi"
      :table="table"
    />
  </div>
</template>

<script>

import CTableCard from '@/components/TableCard'
export default {
  components: {
    CTableCard
  },
  methods: {
    oi () {
      console.log('sd')
    }
  },
  data () {
    return {
      tables: {
        'hash-table-id-1': {
          id: 'hash-service-id-1',
          number: '01',
          people: 3,
          arrival: '2020-01-26T01:52:17-03:00',
          calling: false,
          action: 'menu'
        },
        'hash-table-id-2': {
          id: 'hash-service-id-1',
          number: '02',
          people: 1,
          arrival: '2020-01-26T01:52:17-03:00',
          calling: true,
          action: 'waiter'
        },
        'hash-table-id-3': {
          id: 'hash-service-id-1',
          number: '03',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: false,
          action: 'waiting'
        },
        'hash-table-id-4': {
          id: 'hash-service-id-1',
          number: '04',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: true,
          action: 'order-ready'
        },
        'hash-table-id-5': {
          id: 'hash-service-id-1',
          number: '05',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: false,
          action: 'eating'
        },
        'hash-table-id-6': {
          id: 'hash-service-id-1',
          number: '06',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: true,
          action: 'bill'
        },
        'hash-table-id-7': {
          id: 'hash-service-id-1',
          number: '07',
          reservation: '2020-01-26T01:52:17-03:00'
        },
        'hash-table-id-8': {
          id: 'hash-service-id-1',
          number: '08'
        },
        'hash-table-id-9': {
          id: 'hash-service-id-1',
          number: '09'
        },
        'hash-table-id-10': {
          id: 'hash-service-id-1',
          number: '10'
        },
        'hash-table-id-11': {
          id: 'hash-service-id-1',
          number: '11'
        },
        'hash-table-id-12': {
          id: 'hash-service-id-1',
          number: '12'
        }
      }
    }
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
