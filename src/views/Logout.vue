<template>
  <div>
    <CPaper class="mt-12 pa-8 mx-auto text-center" style="width:150px">
      <div class="mb-4">
        Volte sempre
      </div>
      <CButton @click="$router.push({ name: 'login' })">ir ao login</CButton>
    </CPaper>
  </div>
</template>

<script>
import CButton from '@/components/core/Button'
import CPaper from '@/components/core/Paper'
export default {
  name: 'logout',
  components: {
    CButton,
    CPaper
  },
  mounted () {
    this.$store.commit('auth/clear')
  }
}
</script>

<style>
</style>
