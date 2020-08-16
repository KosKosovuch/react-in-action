import React, { ReactElement } from 'react'
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import { MODULE_NAMES } from 'utils/const/moduleNames'
import { AsyncModuleView } from 'components/base/asyncModuleView'

const CurrentView = (): ReactElement => {
  const { viewName } = useParams()

  return <AsyncModuleView moduleName={MODULE_NAMES.TODO} viewName={viewName} />
}

export const Router = (): ReactElement => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/:viewName`}>
        <CurrentView />
      </Route>
    </Switch>
  )
}
