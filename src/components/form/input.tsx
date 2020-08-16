import React, { ChangeEvent } from 'react'

interface Props {
  value: string
  label?: string
  type?: string
  disabled?: boolean
  autoComplete?: string
  onChangeInput?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, value, onChangeInput, label, disabled, autoComplete }: Props) => {
  return (
    <label className="base-input">
      {label}
      <input autoComplete={autoComplete} type={type} disabled={disabled} value={value} onChange={onChangeInput} />
    </label>
  )
}

Input.defaultProps = {
  type: 'text',
}
