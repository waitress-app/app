<template>
  <div id="app" class="c-app">
    <CLoading />
    <CChangeLocale />
    <CUpdateFound />
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
    CUpdateFound: () => import('@/components/UpdateFound')
  }
}
</script>

<style lang="stylus">

</style>
