import Wrapper from './Wrapper.vue'
import CSwitch from '../src/components/core/Switch'

export default {
  title: 'Core / Switch',
  component: CSwitch
}

export const Active = () => ({
  components: { Wrapper, CSwitch },
  template: `<Wrapper width="100">
    <CSwitch v-model="active"></CSwitch>
  </Wrapper>`,
  data () {
    return {
      active: true
    }
  }
})

export const Inactive = () => ({
  components: { Wrapper, CSwitch },
  template: `<Wrapper width="100">
    <CSwitch v-model="active"></CSwitch>
  </Wrapper>`,
  data () {
    return {
      active: false
    }
  }
})
