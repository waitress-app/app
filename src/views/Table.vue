<template>
  <div class="c-details">
    <div class="c-details-header">
      <div class="c-details-header__back-button" @click="$router.go(-1)">
        <CBackButton />
      </div>
      <div class="c-details-header__number pl-4 title" >
        Mesa #{{ table.number }}
      </div>
      <transition name="fade">
        <div class="c-details-header__calling" v-if="table.calling" @click="turnOffCalling">
          <CWaiter />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CBackButton from '@/components/svg/BackButton'
import CWaiter from '@/components/svg/Waiter'
export default {
  components: {
    CBackButton,
    CWaiter
  },
  data () {
    return {
      table: {
        id: 'hash-service-id-1',
        number: '02',
        people: 1,
        arrival: '2020-01-26T01:52:17-03:00',
        calling: true,
        action: 'waiter'
      }
    }
  },
  methods: {
    turnOffCalling () {
      this.table.calling = false
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="stylus">
.c-details
  display flex
  &-header
    display flex
    flex 1
    align-items center
    &__back-button
      cursor pointer
      width 18px
      height 18px
      flex-shrink 1
    &__number
      color #8790a9
      flex-grow 1
    &__calling
      padding 5px 6px 7px 6px
      width 18px
      height 18px
      flex-shrink 1
      border-radius 100%
      background linear-gradient(135deg, #bc4cf6, #7873ef)
      box-shadow -1px 1px 4px 1px rgba(0,0,0,0.22)
      stroke white
      fill white

</style>
