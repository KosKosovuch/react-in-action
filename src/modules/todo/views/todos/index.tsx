import React, { ReactElement } from 'react'
import { List } from '../../components/list'

export const TodosView = (): ReactElement => {
  return (
    <div>
      <h2>Todos View</h2>
      <button>create new todo</button>
      <List />
    </div>
  )
}
