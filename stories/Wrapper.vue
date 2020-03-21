<script>
import { toogleTheme } from '../src/plugins/theme'
export default {
  props: {
    width: {
      type: String
    }
  },
  render (h) {
    return h(
      'div',
      {
        class: {
          'c-app': true
        },
        style: {
          width: this.width ? this.width + 'px' : '100%',
          margin: 'auto'
        }
      },
      [
        this.$slots.default,
        h(
          'div',
          {
            class: {
              'theme-switch': true
            },
            on: {
              click: () => {
                toogleTheme()
              }
            }
          },
          'Switch Theme'
        )
      ]
    )
  }
}
</script>

<style>
html, body, #root {
  height: 98%
}
#root {
  display: flex
}
.theme-switch {
  position: absolute;
  z-index: 999;
  top: 10px;
  left: 10px;
  background: #999999;
  padding: 6px 12px;
  cursor: pointer;
  color: white;
  font-family: sans-serif;
  border-radius: 10px;
  box-shadow: -1px 2px 2px 1px #79797959;
}
</style>
