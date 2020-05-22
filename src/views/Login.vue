<template>
  <div>
    <CPaper class="c-login mt-12 mx-auto">
      <div class="c-frame my-6">
        <transition name="slide-fade" v-if="!$auth.user">
          <img class="c-frame__logo" alt="Waitress logo" src="../assets/logo.png">
        </transition>
        <transition name="slide-fade-reverse" v-if="$auth.user">
          <CAvatar class="c-frame__picture" v-if="$auth.user.picture" :src="$auth.user.picture" alt="User avatar" />
        </transition>
      </div>
      <CButton @click="logIn">{{ $t('login.login') }}</CButton>
      <p v-if="$auth.user" class="c-link caption" @click="$auth.logout">
        {{ $t('login.notMe', { name: $auth.user.name }) }}
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
      loading: false,
      token: null
    }
  },
  methods: {
    ...mapActions('auth', ['authentication']),
    async logIn () {
      if (!this.$auth.user) {
        this.$auth.loginWithRedirect()
        return
      }
      try {
        this.loading = true
        this.token = await this.$auth.getTokenSilently()
        await this.authentication({
          user: this.$auth.user,
          token: this.token
        })
        this.loading = false
      } catch (err) {
        this.loading = false
        console.log(err)
        alert('Error')
      }
    }
  },
  async mounted () {
    if (this.$route.query.redirect) {
      this.logIn()
    }
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
