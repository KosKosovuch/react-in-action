import React, { ReactElement } from 'react'
import { Router } from './router/routes'

const TodoListModule = (): ReactElement => {
  return (
    <div className="todo-module">
      <Router />
      <h2>Todo List Module</h2>
    </div>
  )
}

export default TodoListModule
