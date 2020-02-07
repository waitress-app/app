<template>
  <CModal v-model="open">
    <div class="c-add-person">
      <CTabs v-model="tab" :items="tabs"></CTabs>
      <transition name="fade" mode="out-in">
        <div v-if="tab === 'code'" key="code">
          <div class="c-add-person__code">
            {{ table.code | formatCode }}
          </div>
        </div>
        <div v-else key="name">
          <div class="mt-8 mb-5">
            <CInput type="text" v-model="name" placeholder="Nome do cliente" block />
          </div>
          <div class="c-add-person__button">
            <CButton :disabled="name.length < 2" @click="add">
              Inserir
            </CButton>
          </div>
        </div>
      </transition>
    </div>
  </CModal>
</template>

<script>
import CInput from '@/components/core/Input'
import CModal from '@/components/core/Modal'
import CButton from '@/components/core/Button'
import CTabs from '@/components/core/Tabs'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    CButton,
    CModal,
    CTabs,
    CInput
  },
  data () {
    return {
      name: '',
      tab: 'name',
      tabs: [
        {
          id: 'name',
          text: 'Nome'
        },
        {
          id: 'code',
          text: 'Código'
        }
      ]
    }
  },
  methods: {
    ...mapActions('table', ['addPerson']),
    async add () {
      this.loading = true
      await this.addPerson({
        name: this.name
      })
      this.open = false
      this.loading = false
    }
  },
  computed: {
    ...mapGetters('table', ['table']),
    open: {
      get () {
        return this.$route.query.newcustomer !== undefined
      },
      set (value) {
        this.$router.go(-1)
      }
    }
  },
  filters: {
    formatCode (value) {
      return `${value.slice(0, 3)}-${value.slice(3, 6)}`
    }
  },
  watch: {
    open (value) {
      if (!value) {
        // wait animations to finish
        setTimeout(() => {
          this.name = ''
          this.tab = 'name'
        }, 300)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-add-person
  margin auto
  display flex
  width 240px
  padding 15px
  flex-direction column
  &__label
    flex 1
    color #8790a9
  &__code
    flex 1
    height 86px
    padding-top 44px
    color #cccccc
    font-size 32px
    letter-spacing 14px
    font-weight bold
    text-align center
  &__hr
    flex 1
    border-color red
  &__button
    flex 1
    text-align center
</style>
