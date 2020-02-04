<template>
  <CModal v-model="open">
    <div class="c-ordering">
    <!-- {{ selectedItem }} -->
      <div class="c-ordering__avatar">
        <CAvatar :src="selectedItem.src" size="64"/>
      </div>
      <div class="c-ordering__name">
        {{ selectedItem.text }}
      </div>
      <div class="c-ordering__quantity c-quantity">
        <div class="c-quantity__label">
          Quantidade:
        </div>
        <div class="c-quantity__btn" :class="{'c-quantity__btn--disabled': quantity === 1}" @click="quantity > 1 ? quantity-- : null">
         <CMinus />
        </div>
        <div class="c-quantity__number">
          {{ quantity }}
        </div>
        <div class="c-quantity__btn" @click="quantity++">
          <CPlus />
        </div>
      </div>
      <div>
        <CInput v-model="notes" block placeholder="Observações"/>
      </div>
      <CButton @click="request">Finalizar pedido</CButton>
    </div>
  </CModal>
</template>

<script>
import CButton from '@/components/core/Button'
import CModal from '@/components/core/Modal'
import CAvatar from '@/components/core/Avatar'
import CInput from '@/components/core/Input'
import CPlus from '@/components/svg/Plus'
import CMinus from '@/components/svg/Minus'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    CModal,
    CAvatar,
    CButton,
    CInput,
    CPlus,
    CMinus
  },
  props: {
    value: {
      type: Boolean
    }
  },
  data () {
    return {
      notes: '',
      quantity: 1,
      share: ['']
    }
  },
  methods: {
    ...mapActions('menu', ['requestOrder']),
    ...mapMutations('menu', ['setSelectOrder']),
    request () {
      this.requestOrder()
    },
    cancelOrder () {
      this.setSelectOrder(null)
    }
  },
  computed: {
    ...mapGetters('table', ['selectedItem']),
    open: {
      get () {
        return this.selectedItem !== null
      },
      set (value) {
        this.$emit('input', false)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-ordering
  margin auto
  display flex
  width 240px
  padding 15px
  flex-direction column
  &__avatar
    position absolute
    margin-left -32px
    top -32px
    left 50%
  &__name
    margin-top 20px
    margin-bottom 8px
    font-size 24px
    text-align center
  &__quantity
    flex-basis 50%
.c-quantity
  display flex
  align-items center
  padding 10px
  &__label
    flex-grow 1
  &__btn
    width 26px
    flex-shrink 1
    text-align center
    >svg
      width 8px
      fill white
      background: linear-gradient(135deg, #bc4cf6, #7873ef);
      padding: 8px
      margin-top 1px
      border-radius: 100%
    &--disabled
      >svg
        fill #00000080
  &__number
    flex-shrink 1
    font-size 28px
    padding 0px 10px
</style>
