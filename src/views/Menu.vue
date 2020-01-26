<template>
  <div class="c-menu">
    <h3 class="headline">
      Nenhum produto disponível
    </h3>
    <CButton>Cadastrar</CButton>
  </div>
</template>

<script>
import CButton from '@/components/core/Button'
export default {
  components: {
    CButton
  }
}
</script>

<style lang="stylus">
.c-menu
  text-align center
  color #cdcad6
</style>
