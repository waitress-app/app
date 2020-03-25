<template>
  <CModal v-model="open">
    <CPaper class="ma-4">
      <div class="pa-4 text-center">
        <img
          :src="`https://www.countryflags.io/${$i18n.locale.split('-')[1]}/flat/64.png`"
          :alt="$i18n.locale"
        >
        <div class="caption">
          {{ $t(`login.actual`) }}
        </div>
      </div>
    </CPaper>
    <div class="c-change-locales">
      <img
        class="c-change-locales__locales link"
        v-for="locale in allLocales"
        :src="`https://www.countryflags.io/${locale.split('-')[1]}/flat/32.png`"
        :key="locale"
        @click="changeLocale(locale)"
        :alt="locale"
      >
    </div>
  </CModal>
</template>

<script>
import CPaper from '@/components/core/Paper'
import CModal from '@/components/core/Modal'
export default {
  components: {
    CModal,
    CPaper
  },
  data () {
    return {
      allLocales: ['pt-BR', 'es-CO', 'en-US']
    }
  },
  methods: {
    async changeLocale (lang) {
      this.$i18n.locale = lang
    }
  },
  computed: {
    open: {
      get () {
        return this.$route.query.locale !== undefined
      },
      set (value) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-change-locales
  display flex
  margin auto
  justify-content center
  &__locales
    padding 4px
</style>
