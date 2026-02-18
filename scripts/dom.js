export function updatePreview(color) {
  document.querySelector('.color-preview').style.backgroundColor = color
}

export function updateTitle(color) {
  document.querySelector('.title').style.color = color
}

export function updateResult(channel, value) {
  document.querySelector(`[data-result="${channel}"]`).value = value
}

export function updateHex(hex) {
  const el = document.querySelector('.color-code')
  if (el) el.textContent = hex
}