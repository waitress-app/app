<template>
  <div class="c-tips">
    <div class="c-tips__value title">
      {{ tipsFormat }}
    </div>
    <CProgressBar :value="50" />
  </div>
</template>

<script>
import CProgressBar from '@/components/core/ProgressBar'
export default {
  components: {
    CProgressBar
  },
  props: {
    goal: {
      type: Number
    },
    tips: {
      type: Number
    }
  },
  computed: {
    tipsFormat () {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.tips)
    }
  }
}
</script>

<style lang="stylus">
.c-tips
  display flex
  padding 5px 20px
  align-items center
  flex-direction column
  .c-tips__value
    flex 1
</style>
