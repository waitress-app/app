<template>
  <div class="c-gallery">
    <div class="c-gallery__scroller" ref="scrollWrapper">
      <div class="c-gallery__item" v-for="option in options" :key="option.id">
        <img :src="require(`../assets/${option.logo}`)" alt="" class="c-gallery__logo">
      </div>
    </div>
    <div class="c-customer-options__button c-link mt-5" @click="select">
      Selecionar
    </div>
    <div class="c-customer-options__button c-link" @click="$emit('cancel')">
      Cancelar
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          id: 'picpay',
          logo: 'picpay-logo.png',
          name: 'PicPay'
        },
        {
          id: 'ifood',
          logo: 'ifood-logo.png',
          name: 'iFood'
        },
        {
          id: 'mp',
          logo: 'mercado-pago-logo.png',
          name: 'Mercado Pago'
        },
        {
          id: 'Rappi',
          logo: 'rappi-logo.png',
          name: 'Rappi'
        }
      ]
    }
  },
  methods: {
    select () {
      const selectedOption = Math.round(this.$refs.scrollWrapper.scrollLeft / 195)
      this.$emit('select', this.options[selectedOption].id)
    }
  }
}
</script>

<style lang="stylus">
.c-gallery
  position relative
  max-width 1000px
  padding 0 15px
  &__scroller
    scroll-snap-type x mandatory
    overflow-x scroll
    overflow-y hidden
    display flex
    align-items center
    -webkit-overflow-scrolling touch
  &__item
    scroll-snap-align center
    margin 10px
    position relative
    text-align center
    margin auto
    width 200px
    min-width 200px
  &__logo
    max-width 90%
    height auto
    max-height 70px
</style>
