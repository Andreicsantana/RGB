import { state } from './state.js'
import { rgbToString, rgbToHex } from './color.service.js'
import { updatePreview, updateTitle, updateResult, updateHex } from './dom.js'

document.querySelectorAll('input[type="range"]').forEach(input => {
  input.addEventListener('input', e => {
    const channel = e.target.dataset.color
    const val = Number(e.target.value)
    state[channel] = val

    const color = rgbToString(state)
    const hex = rgbToHex(state)

    updatePreview(color)
    updateTitle(color)
    updateResult(channel, state[channel])
    updateHex(hex)
  })
})


document.querySelectorAll('input[data-result]').forEach(input => {
  input.addEventListener('input', e => {
    const channel = e.target.dataset.result
    let val = Number(e.target.value)
    if (Number.isNaN(val)) val = 0
    val = Math.max(0, Math.min(255, Math.round(val)))

    state[channel] = val

    const range = document.querySelector(`input[type="range"][data-color="${channel}"]`)
    if (range) range.value = val
    const color = rgbToString(state)
    const hex = rgbToHex(state)
    updatePreview(color)
    updateTitle(color)
    updateResult(channel, state[channel])
    updateHex(hex)
  })


  input.addEventListener('blur', e => {
    const channel = e.target.dataset.result
    updateResult(channel, state[channel])
  })
})

// initialize UI from state
const initialColor = rgbToString(state)
const initialHex = rgbToHex(state)
updatePreview(initialColor)
updateTitle(initialColor)
updateHex(initialHex)
Object.keys(state).forEach(channel => updateResult(channel, state[channel]))