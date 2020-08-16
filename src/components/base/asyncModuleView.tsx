import React, { ReactElement } from 'react'
import { AsyncComponent } from './asyncComponent'

interface Props {
  moduleName: string
  viewName: string
  fallback?: ReactElement | undefined
}
export const AsyncModuleView = ({ moduleName, viewName, fallback }: Props): ReactElement => {
  const path = `modules/${moduleName}/views/${viewName}`

  return <AsyncComponent path={path} fallback={fallback} />
}
