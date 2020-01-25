<template>
  <div id="app" class="c-app">
    <Loading />
    <transition name="slide-fade">
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
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

.c-link
  color #13255682
  cursor pointer
</style>
