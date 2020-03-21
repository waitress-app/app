<template>
  <div id="app" class="c-app">
    <Loading />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  components: {
    Loading
  }
}
</script>

<style lang="stylus">

</style>
