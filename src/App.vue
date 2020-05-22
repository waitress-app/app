<template>
  <div id="app" class="c-app">
    <CLoading />
    <CChangeLocale />
    <CUpdateFound />
    <CPushNotification />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import CLoading from '@/components/Loading'
import CChangeLocale from '@/components/ChangeLocale'
export default {
  components: {
    CLoading,
    CChangeLocale,
    CUpdateFound: () => import('@/components/UpdateFound'),
    CPushNotification: () => import('@/components/PushNotification')
  },
  created () {
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch('auth/connectDb')
    }
  }
}
</script>

<style lang="stylus">

</style>
