import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CPaper from '@/components/core/Paper.vue'

describe('Paper.vue', () => {
  it('renders slots', () => {
    const header = '<h1>Render</h1>'
    const wrapper = shallowMount(CPaper, {
      slots: {
        default: header
      }
    })
    expect(wrapper.find('h1').is('h1')).toBe(true)
  })
  it('call router push if src is passed', () => {
    const src = '/page'
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home'
        },
        {
          path: '/page',
          name: 'page'
        }
      ]
    })

    const wrapper = shallowMount(CPaper, {
      localVue,
      router,
      propsData: {
        src
      }
    })
    wrapper.trigger('click')
    expect(wrapper.vm.$route.path).toBe(src)
  })

  it('emiting click', () => {
    const wrapper = shallowMount(CPaper)
    wrapper.trigger('click')
    expect(wrapper.emitted().click.length).toBe(1)
  })
})
