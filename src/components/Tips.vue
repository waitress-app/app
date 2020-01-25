<template>
  <div class="c-tips">
    <div class="c-tips__value title">
      {{ tipsFormat }}
    </div>
    <CPaper class="c-tips__bar">
      <div class="c-tips__progress" style="width: 50px"></div>
    </CPaper>
  </div>
</template>

<script>
import CPaper from '@/components/core/Paper'
export default {
  components: {
    CPaper
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
  .c-tips__bar
    flex 1
    width 100%
    padding 2px
    margin 4px
    .c-tips__progress
      height 10px
      border-radius 8px
      background linear-gradient(135deg, #bc4cf6, #7873ef)

</style>
