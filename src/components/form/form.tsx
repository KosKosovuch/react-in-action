import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'

// components
import { Input } from './input'

interface Props {}
export const Form = (props: Props): ReactElement => {
  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
  }

  const [text, setText] = useState('default text')

  function onChangeText(ev: ChangeEvent<HTMLInputElement>): void {
    setText(ev.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <Input type="text" value={text} onChangeInput={onChangeText} />

      <button>Submit</button>
    </form>
  )
}
