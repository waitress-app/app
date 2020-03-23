<template>
  <div style="text-align:center;padding-top:42px;padding-bottom:36px">
    <img v-if="!loading" src="../assets/picpay-qr.png" alt="" style="margin:auto" @click="checkPayment">
    <div v-else ref="lottie" style="height: 150px;" @click.once="approved"></div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  data () {
    return {
      lottie: null,
      loading: false
    }
  },
  methods: {
    async checkPayment () {
      this.loading = true
      this.rejected()
    },
    async approved () {
      this.lottie.destroy()
      this.$nextTick(() => {
        this.lottie = lottie.loadAnimation({
          container: this.$refs.lottie,
          path: '/img/lottie/payment/success.json',
          renderer: 'svg',
          autoplay: true
        })
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.$emit('approved')
    },
    rejected () {
      this.$nextTick(() => {
        this.lottie = lottie.loadAnimation({
          container: this.$refs.lottie,
          path: '/img/lottie/payment/error.json',
          renderer: 'svg',
          autoplay: true
        })
      })
    }
  },
  beforeDestroy () {
    if (this.lottie !== null) {
      this.lottie.destroy()
    }
  }
}
</script>

<style>

</style>
