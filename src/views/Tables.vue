<template>
  <div class="c-tables">
    <CPaper v-for="table in tables" :key="table.id" class="c-table"
      :class="{'c-table--empty': !table.people, 'c-table--calling': table.calling, 'c-table--reservation': table.reservation}">
      <template v-if="table.people > 0" @click="table.calling = true">
        <div class="c-table__people">
            {{ table.people }} <span class="caption">pessoa{{ table.people > 1 ? 's' : ''}}</span>
        </div>
        <div class="c-table__number">
          {{ table.number }}
        </div>
        <div class="c-table__action" :class="{'c-table__action--calling': table.calling}">
          <TableActionSvg :action="table.action" />
        </div>
        <div class="c-table__arrival caption">
          {{ table.arrival | hours }}
        </div>
        <div class="c-table__billing" v-if="table.billing">
          {{ table.billing | currency }}
        </div>
      </template>
      <p v-else class="title px-8">
        Mesa {{table.number}} {{ table.reservation ? 'Reservada' : 'Livre' }}
      </p>
    </CPaper>
  </div>
</template>

<script>
import CPaper from '@/components/core/Paper'
import TableActionSvg from '@/components/TableActionSvg'
export default {
  components: {
    CPaper,
    TableActionSvg
  },
  data () {
    return {
      tables: {
        'hash-id-1': {
          number: '01',
          people: 3,
          arrival: '2020-01-26T01:52:17-03:00',
          calling: false,
          action: 'menu'
        },
        'hash-id-2': {
          number: '02',
          people: 1,
          arrival: '2020-01-26T01:52:17-03:00',
          calling: true,
          action: 'waiter'
        },
        'hash-id-3': {
          number: '03',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: false,
          action: 'waiting'
        },
        'hash-id-4': {
          number: '04',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: true,
          action: 'order-ready'
        },
        'hash-id-5': {
          number: '05',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: false,
          action: 'eating'
        },
        'hash-id-6': {
          number: '06',
          people: 6,
          arrival: '2020-01-26T01:52:17-03:00',
          billing: 54.55,
          calling: true,
          action: 'bill'
        },
        'hash-id-7': {
          number: '07',
          reservation: '2020-01-26T01:52:17-03:00'
        },
        'hash-id-8': {
          number: '08'
        },
        'hash-id-9': {
          number: '09'
        },
        'hash-id-10': {
          number: '10'
        },
        'hash-id-11': {
          number: '11'
        },
        'hash-id-12': {
          number: '12'
        }
      }
    }
  },
  filters: {
    currency (value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    },
    hours (value) {
      const date = new Date(value)
      return `${date.getHours()}:${date.getMinutes()}`
    }
  }
}
</script>

<style lang="stylus">
.c-tables
    display flex
    justify-content space-around
    flex-wrap wrap
.c-table
  color #8790a9
  padding 8px
  display flex
  flex-direction row
  flex-wrap: wrap
  flex-basis 150px
  height 180px
  margin-bottom 24px
  transition all .3s ease-in-out
  &--empty
    display flex
    align-items center
    box-shadow: none
    border-style dashed
    text-align center
    >p
      flex 1
      color #e5e5e5
  &--reservation
    background #f8f8f8
  &--calling
    background linear-gradient(135deg,#bc4cf6,#7873ef)
    color white
  &__people
    flex-basis 50%
    font-size 30px
  &__number
    flex-basis 50%
    text-align right
    font-size 30px
  &__action
    flex: 1
    flex-basis 100%
    text-align center
    stroke: #8e66f1;
    fill: #9983f3;
    margin 28px
    &--calling
      fill white
  &__arrival
    flex 1
    flex-basis 50%
  &__billin
    flex 1
    flex-basis 50%
    text-align right
</style>
