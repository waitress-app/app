<template>
  <CModal v-model="open" class="text-center">
    <div class="c-customers-wrapper ma-4">
      <CPaper class="c-customer c-link mr-4 text-center" v-for="customer in table.customers" :key="customer.id" @click="select(customer.id)">
        <CAvatar class="c-customer__avatar" :src="customer.avatar" size="48"/>
        <div class="c-customer__name">
          {{ customer.name }}
        </div>
        <transition name="fade">
          <div class="c-customer__selected" v-show="share[customer.id]">
            <CEating />
          </div>
        </transition>
      </CPaper>
    </div>
    <CButton @click="selectShare(share)">Dividir</CButton>
  </CModal>
</template>

<script>
import CAvatar from '@/components/core/Avatar'
import CButton from '@/components/core/Button'
import CModal from '@/components/core/Modal'
import CPaper from '@/components/core/Paper'
import CEating from '@/components/svg/Eating'

import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    CAvatar,
    CButton,
    CModal,
    CPaper,
    CEating
  },
  props: {
    value: {
      type: Array
    }
  },
  data () {
    return {
      share: {}
    }
  },
  methods: {
    ...mapMutations('table', ['selectShare']),
    selectShare () {
      this.$emit('input', Object.keys(this.share))
      this.open = false
    },
    select (id) {
      if (!this.share[id]) {
        this.$set(this.share, id, true)
      } else {
        this.$delete(this.share, id)
      }
    }
  },
  computed: {
    ...mapGetters('table', ['table']),
    open: {
      get () {
        return this.$route.query.share
      },
      set (value) {
        this.$router.go(-1)
      }
    }
  },
  watch: {
    open () {
      this.share = {}
      this.value.forEach(elem => {
        this.$set(this.share, elem, true)
      })
    }
  }
}
</script>

<style lang="stylus">
.c-customers-wrapper
  display flex
  overflow auto
.c-customer
  padding 10px
  flex-basis 80px
  max-width 80px
  flex-shrink 1
  position relative
  &__avatar
    margin 0px auto 8px auto
  &__selected
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background linear-gradient(135deg, #bc4cf650, #7873ef50)
    border-radius 8px
    z-index 1
    >svg
      stroke #8e66f1
      fill #9983f3
      width 22px
      position absolute
      right 5px
      top 5px
</style>
