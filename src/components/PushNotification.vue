<template>
  <div id="update-info" class="update-container" :class="{'update-container__update-needed': !havePermission}" @click="enableNotifications">
      <span class="update-text">Clique aqui para ativar</span>
      <br>
      <span class="update-text">as notificações</span>
      <br>
  </div>
</template>

<script>
import messaging from '@/plugins/firebase/messaging'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      havePermission: true
    }
  },
  methods: {
    ...mapActions('profile', ['setToken']),
    async storeToken (token) {
      await this.setToken({
        uid: this.$auth.user.sub,
        token
      })
    },
    enableNotifications () {
      window.Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          console.log('Notification permission granted.')
          messaging.getToken().then((currentToken) => {
            if (currentToken) {
              this.storeToken(currentToken)
              return
            }
            console.log('No Instance ID token available. Request permission to generate one.')
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err)
          })
          return
        }
        console.log('não tem push')
        this.havePermission = false
      })
    }
  },
  created () {
    this.havePermission = Notification.permission === 'granted'
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
