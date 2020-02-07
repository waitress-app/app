<script>
export default {
  props: {
    src: {
      type: String
    },
    height: {
      type: [String, Number]
    },
    width: {
      type: [String, Number]
    },
    size: {
      type: [String, Number],
      default: 128
    },
    alt: {
      type: String
    }
  },
  methods: {
    getSize (size, width, height) {
      return [
        parseInt(size || width),
        parseInt(size || height)
      ]
    }
  },
  render (h) {
    const [width, height] = this.getSize(this.size, this.width, this.height)
    if (width !== height) console.warn('Avatar is not round')
    const border = width > 65 ? 4 : width > 33 ? 2 : 0
    return h('div', {
      class: {
        'c-avatar': true,
        'c-button--disabled': this.disabled
      },
      style: {
        height: `${height}px`,
        width: `${width}px`
      },
      on: {
        click: () => {
          this.$emit('click')
        }
      }
    }, [
      h('img', {
        class: {
          'c-avatar__img': true
        },
        attrs: {
          src: this.src,
          alt: this.alt
        },
        style: {
          height: `${height - border * 2}px`,
          width: `${width - border * 2}px`,
          padding: `${border}px`
        }
      })
    ])
  }
}
</script>

<style lang="stylus">
.c-avatar
  border-radius 100%
  background linear-gradient(135deg, #bc4cf6, #7873ef)
  &__img
    border-radius 100%
</style>
