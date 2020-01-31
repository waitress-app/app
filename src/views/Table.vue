<template>
  <div class="c-details" v-if="table !== null">
    <div class="c-details-header">
      <div class="c-details-header__back-button" @click="$router.go(-1)">
        <CBackButton />
      </div>
      <div class="c-details-header__number pl-4 title" >
        Mesa #{{ table.number }}
      </div>
      <CSwitch class="c-details-header__calling" :value="table.calling" @input="turnOffCalling"/>
    </div>
    <CAddPerson :code="table.code" v-model="addingPerson" />
    <div class="c-details-customers">
      <div class="c-details-customers__avatar" v-for="customer in table.customers" :key="customer.id">
        <CAvatar :src="customer.avatar ? customer.avatar : `https://ui-avatars.com/api/?size=128&name=${customer.name}&color=fff&background=8d68f1`" size="48"/>
      </div>
      <div class="c-details-customers__avatar c-link" @click="addingPerson = true">
        <CAvatar src="https://ui-avatars.com/api/?size=128&name=%2B&color=8d68f1&background=ffffff" size="48"/>
      </div>
    </div>
  </div>
</template>

<script>
import CBackButton from '@/components/svg/BackButton'
import CSwitch from '@/components/core/Switch'
import CAvatar from '@/components/core/Avatar'
import CAddPerson from '@/components/AddPerson'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CBackButton,
    CAvatar,
    CAddPerson,
    CSwitch
  },
  data () {
    return {
      addingPerson: false,
      loading: false
    }
  },
  methods: {
    ...mapActions('table', ['getTable']),
    turnOffCalling () {
      this.table.calling = false
    }
  },
  computed: {
    ...mapGetters('table', ['table'])
  },
  async mounted () {
    this.loading = true
    await this.getTable(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style lang="stylus">
.c-details
  display flex
  flex-direction column
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
      flex-shrink 1
  &-customers
    display flex
    padding 12px
    margin-top 24px
    border-radius 50px
    box-shadow inset 4px 2px 7px 3px #eaeaea85
    overflow-x auto
    &__avatar
      flex-basis 58px
</style>
