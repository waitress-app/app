<template>
  <div class="c-loader" :class="{'c-loader--visible': loading }">
    <div class="c-loader__logo">
      <img class="c-loader__logo-rotating" :src="require(`../assets/logo.png`)" alt="Waitress loading">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('app', ['loading'])
  }
}
</script>

<style lang="stylus">
.c-loader
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index 1
  display flex
  background #0000001f
  transition .3s cubic-bezier(.25,.8,.5,1)
  opacity 0
  visibility hidden
  &--visible
    opacity 1
    visibility visible
  &__logo
    width 100px
    height 100px
    margin auto
    >img
      max-width 100%
    &-rotating
      animation rotating 10s linear infinite;

/* https://stackoverflow.com/a/21320622 */
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
