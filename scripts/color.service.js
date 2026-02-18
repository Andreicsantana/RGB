export function rgbToString({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`
}

export function rgbToHex({ red, green, blue }) {
  const toHex = n => {
    const h = Number(n).toString(16)
    return h.length === 1 ? '0' + h : h
  }

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase()
}