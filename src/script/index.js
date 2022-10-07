import './init'
import * as crypt from './crypt'

const form = document.getElementById('form')
const { input, salt } = form
const formMode = document.getElementById('toggle')
const output = document.querySelector('#output .text')
const copyBtn = document.getElementById('copy')

const encoder = (data, salt) => {
  return crypt.encode(data, salt === '' ? undefined : +salt)
}

const decoder = (data, salt) => {
  return crypt.decode(data, salt === '' ? undefined : +salt)
}

const colorLog = (str, clr, moreStyle) => {
  console.log(
    '%c' + str,
    `
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0.5rem 0;
    color: ${clr};
    ${moreStyle}
    `
  )
}

window.attack = catchError(async function () {
  const result = await crypt.attack(...arguments)
  colorLog(result, 'hotpink')
})

form.onsubmit = catchError(async e => {
  e.preventDefault()
  const inputValue = input.value.trim()
  const saltValue = salt.value.trim()

  if (!inputValue) return alert('Input is a must')
  if (saltValue.length > 12) return alert('Salt max length :12')

  const outputData = formMode.checked
    ? decoder(inputValue, saltValue)
    : encoder(inputValue, saltValue)

  output.innerText = await outputData
})

copyBtn.onclick = () => {
  const outputValue = output.textContent.trim()
  navigator.clipboard.writeText(outputValue)

  copyBtn.classList.add('copied')
  copyBtn.textContent = 'Copied'

  setTimeout(() => {
    copyBtn.classList.remove('copied')
    copyBtn.textContent = 'Copy'
  }, 1000)
}
