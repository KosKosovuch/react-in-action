import React, { ChangeEvent } from 'react'

interface Props {
  value: string
  type?: string
  onChangeInput?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, value, onChangeInput }: Props) => {
  return <input type={type} value={value} onChange={onChangeInput} />
}

Input.defaultProps = {
  type: 'text',
}
