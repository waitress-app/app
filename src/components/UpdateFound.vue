<template>
  <div id="update-info" class="update-container" :class="{'update-container__update-needed': updateExists}" onclick="location.reload(true)" @click="refreshApp">
      <span class="update-text">Novas atualizações foram encontradas</span>
      <br>
      <span class="update-text">Clique aqui e atualize a página</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      refreshing: false,
      registration: null,
      updateExists: false
    }
  },
  methods: {
    showRefreshUI (e) {
      this.registration = e.detail
      this.updateExists = true
    },
    refreshApp () {
      this.updateExists = false
      if (!this.registration || !this.registration.waiting) { return }
      this.registration.waiting.postMessage('skipWaiting')
    }
  },
  created () {
    document.addEventListener(
      'swUpdated', this.showRefreshUI, { once: true }
    )
    navigator.serviceWorker.addEventListener(
      'controllerchange', () => {
        if (this.refreshing) return
        this.refreshing = true
        window.location.reload()
      }
    )
  }
}
</script>

<style lang="stylus">
.update-container
  cursor pointer
  position fixed
  z-index 999
  padding 15px 30px
  bottom 0
  background #397dff
  width 100%
  color #fff
  transition ease-in-out .3s
  transform translateY(100px)
  box-sizing border-box
  left 0
  font-size 16px
  &__update-needed
    visibility visible!important
    transform translateY(0px)
</style>
