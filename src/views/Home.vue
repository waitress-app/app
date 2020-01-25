<template>
  <div class="c-home">
    <div class="c-navbar">
      <div class="c-navbar__avatar">
        <CAvatar :src="user.picture" size="64" />
      </div>
      <div class="c-navbar__name pl-4">
        <h2 class="title my-0">
          {{ user.name }}
        </h2>
        <p class="c-link my-0">
          sair
        </p>
      </div>
      <div class="c-navbar__tips">
        <CTips :goal="100" :tips="54.32" />
      </div>
    </div>
    <CTabs v-model="tab" :items="tabs"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CAvatar from '@/components/core/Avatar'
import CTips from '@/components/Tips'
import CTabs from '@/components/core/Tabs'
export default {
  components: {
    CAvatar,
    CTips,
    CTabs
  },
  data () {
    return {
      tab: 'Mesas',
      tabs: ['Mesas', 'Pedidos', 'Menu']
    }
  },
  computed: {
    ...mapGetters('auth', ['user'])
  }
}
</script>

<style lang="stylus">
// .c-home
.c-navbar
  display flex
  align-items center
  &__avatar
    flex-shrink 1
  &__name
    flex 1
  &__tips
    flex-shrink 1
    text-align right

</style>
