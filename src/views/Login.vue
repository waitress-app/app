<template>
  <div>
    <div class="c-login mt-12 mx-auto">
      <div class="c-frame my-6">
        <transition name="slide-fade">
          <img class="c-frame__logo" v-if="!user" alt="Vue logo" src="../assets/logo.png">
        </transition>
        <transition name="slide-fade-reverse">
          <div class="c-frame__picture" v-if="user">
            <img class="pa-1" :src="user.picture" alt="user pic">
          </div>
        </transition>
      </div>
      <CButton :disabled="loading || !user">Entrar</CButton>
      <p v-if="user" class="c-link caption" @click="refreshUser">
        não é {{ user.name }}?
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CButton from '@/components/core/Button.vue'

export default {
  name: 'home',
  components: {
    CButton
  },
  data () {
    return {
      loading: false,
      user: null
    }
  },
  methods: {
    refreshUser () {
      this.user = null
      setTimeout(() => {
        this.getUser()
      }, 600)
    },
    async getUser () {
      this.loading = true
      const response = await fetch('https://randomuser.me/api/')
      if (response.ok) { // if HTTP-status is 200-299
        const { results: userList } = await response.json()
        const user = userList[0]
        this.user = {
          id: user.login.uuid,
          picture: user.picture.large,
          name: `${user.name.first} ${user.name.last}`
        }
      } else {
        alert('HTTP-Error: ' + response.status)
      }
      this.loading = false
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style lang="stylus">
.c-login
  text-align center
  border 1px solid #f3f3f3
  box-shadow -3px 2px 4px 1px #68686817
  border-radius 8px
  width 250px
  height 260px
.c-frame
  display flex
  height 128px
  &__logo
    margin auto
    height 128px
  &__picture
    position absolute
    margin-left: -64px
    height 128px
    width 128px
    left: 50%
    border-radius 100%
    background linear-gradient(135deg, #bc4cf6, #7873ef)
    &>img
      height 120px
      width 120px
      border-radius 100%

.slide-fade-enter-active, .slide-fade-reverse-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active, .slide-fade-reverse-leave-active {
  transition: all .8s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
.slide-fade-reverse-enter, .slide-fade-reverse-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
