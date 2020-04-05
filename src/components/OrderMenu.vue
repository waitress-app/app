<template>
  <CModal v-model="open" class="c-order-menu">
    <CTabs v-model="tab" :items="tabs" class="mb-8"/>
    <transition name="fade" mode="out-in" v-for="type in tabs" :key="type.id">
      <div v-if="tab === type.id" class="c-order-menu__list" :key="type.id">
        <CMenuCard  class="c-order-menu__item" v-for="(item, index) in menuTypes[type.id]" :key="index" :item="item" @click="selectItem(item.id)"/>
      </div>
    </transition>
  </CModal>
</template>

<script>
import CTabs from '@/components/core/Tabs'
import CModal from '@/components/core/Modal'
import loadMenu from '@/components/mixins/loadMenu'
export default {
  components: {
    CTabs,
    CModal
  },
  props: {
    value: {
      type: Boolean
    }
  },
  mixins: [loadMenu],
  data () {
    return {
      tab: 'meal',
      tabs: [
        {
          text: 'Pratos',
          id: 'meal'
        },
        {
          text: 'Bebidas',
          id: 'drinks'
        },
        {
          text: 'Doces',
          id: 'dessert'
        }
      ]
    }
  },
  methods: {
    selectItem (id) {
      this.$router.push({
        query: {
          ...this.$route.query,
          menu: false,
          item: id
        }
      })
    }
  },
  computed: {
    open: {
      get () {
        return this.$route.query.item ? false : this.$route.query.menu
      },
      set () {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="stylus">
.c-order-menu
  >.c-modal__paper
    height 430px
    overflow hidden
  &__list
    height 350px
    overflow auto
  &__item
    width 300px
</style>
