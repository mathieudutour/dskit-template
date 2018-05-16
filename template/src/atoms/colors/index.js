export class Color {
  constructor(options) {
    this.displayName = options.displayName
    this.rgb = options.rgb
    this.alpha = 1

    if (options.alpha) {
      this.alpha = Math.max(0, Math.min(1, options.alpha))
    } else {
      this.alpha = 1
    }
  }

  toString(format = 'rgb', options) {
    const hasAlpha =
      options &&
      typeof options === `object` &&
      typeof options.alpha === `number`
    const alpha = options && hasAlpha ? options.alpha : undefined
    return !hasAlpha && format === 'hex'
      ? this.toHexString()
      : this.toRGBString(alpha)
  }

  toRGBString(alpha) {
    const a = typeof alpha === `number` ? alpha : this.alpha
    return a === 1
      ? `rgb(${this.rgb.join(', ')})`
      : `rgba(${this.rgb.join(', ')}, ${a})`
  }

  toHexString() {
    const [r, g, b] = this.rgb.map(d => this.hexDigit(d))

    return this.alpha === 1
      ? `#${r}${g}${b}`
      : `#${r}${g}${b}${this.hexDigit(this.alpha * 255)}`
  }

  hexDigit(d) {
    const digit = Math.floor(d)
      .toString(16)
      .slice(-2)

    return digit.length === 2 ? digit : `0${digit}`
  }
}

const colors = {
  primary: new Color({
    displayName: 'Primary',
    rgb: [115, 199, 0],
  }),
  primaryLight: new Color({
    displayName: 'Primary Light',
    rgb: [241, 249, 230],
  }),
  black: new Color({
    displayName: 'Black',
    rgb: [51, 51, 51],
  }),
  grey: new Color({
    displayName: 'Grey 70',
    rgb: [204, 204, 240],
  }),
  darkGrey: new Color({
    displayName: 'Dark Grey',
    rgb: [153, 153, 153],
  }),
  lightGrey: new Color({
    displayName: 'Dark Grey',
    rgb: [243, 243, 243],
  }),
  white: new Color({
    displayName: 'White',
    rgb: [255, 255, 255],
  }),
}

export default colors
