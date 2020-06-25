import React, { ReactElement, useState } from 'react'

export const Counter = (): ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
