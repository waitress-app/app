<template>
  <div>
    <CPaper class="c-login mt-12 mx-auto">
      <div class="c-frame my-6">
        <transition name="slide-fade">
          <img class="c-frame__logo" v-if="!user" alt="Waitress logo" src="../assets/logo.png">
        </transition>
        <transition name="slide-fade-reverse">
          <CAvatar class="c-frame__picture" v-if="user" :src="user.picture" alt="User avatar" />
        </transition>
      </div>
      <CButton :disabled="loadingPicture || !user" @click="logIn">{{ $t('login.login') }}</CButton>
      <p v-if="user" class="c-link caption" @click="refreshUser">
        {{ $t('login.notMe', { name: user.name }) }}
      </p>
    </CPaper>
    <div class="text-center mt-2">
      <img
        :src="`https://www.countryflags.io/${$i18n.locale.split('-')[1]}/shiny/32.png`"
        :alt="$i18n.locale"
        class="c-link"
        @click="$router.push({ query: { locale: 'change' }})"
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CAvatar from '@/components/core/Avatar'
import CButton from '@/components/core/Button'
import CPaper from '@/components/core/Paper'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  components: {
    CAvatar,
    CButton,
    CPaper
  },
  data () {
    return {
      loadingPicture: false,
      user: null,
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['authentication']),
    async logIn () {
      if (!this.user) return

      try {
        this.loading = true
        await this.authentication(this.user)
        this.loading = false
      } catch (err) {
        this.loading = false
        console.log(err)
        alert('Error')
      }
    },
    refreshUser () {
      this.user = null
      setTimeout(() => {
        this.getUser()
      }, 600)
    },
    async getUser () {
      this.loadingPicture = true
      // const response = await fetch('https://randomuser.me/api/')
      const response = { ok: false }
      if (response.ok) { // if HTTP-status is 200-299
        const { results: userList } = await response.json()
        const user = userList[0]
        this.user = {
          id: user.login.uuid,
          picture: user.picture.large,
          name: `${user.name.first}`
        }
      } else {
        this.user = {
          id: '5151c943-a23e-4a91-89b1-7b2e8feb30cd',
          picture: 'https://randomuser.me/api/portraits/men/90.jpg',
          name: 'Freddie'
        }
      }
      this.loadingPicture = false
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
</style>
