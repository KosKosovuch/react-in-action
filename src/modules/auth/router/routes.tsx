import React from 'react'
import { BrowserRouter as Routes, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import { AsyncComponent } from 'components/base/asyncComponent'

const routes = [
  {
    path: '/sign-up',
    component: <AsyncComponent path="modules/auth/views/signUp" />,
  },
]

export const Router = () => {
  const { path } = useRouteMatch()
  console.log(path)
  return (
    <Routes>
      <Switch>
        {routes.map(({ component, path }, i) => (
          <Route key={i} path={path} exact children={component} />
        ))}
      </Switch>
      <Route path={path + '/:auth-view'} />
    </Routes>
  )
}
