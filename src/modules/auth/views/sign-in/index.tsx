import React, { FormEvent, ReactElement } from 'react'

const SignIn = (): ReactElement => {
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    alert('Submit form')
  }
  return (
    <form onSubmit={onSubmit}>
      <h4>Sign In Form</h4>
      <input type="email" required />
      <input type="password" required />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SignIn
