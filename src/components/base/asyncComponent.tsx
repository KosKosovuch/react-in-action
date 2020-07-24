import React, { ReactElement } from 'react'
import loadable from '@loadable/component'

interface Props {
  path: string
  fallback?: ReactElement | undefined
}

export const AsyncComponent = ({ path, fallback }: Props): ReactElement => {
  const LoadedComponent = loadable(() => import(`../../${path}`))

  return <LoadedComponent fallback={fallback} />
}
