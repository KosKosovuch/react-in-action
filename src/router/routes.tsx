import React from 'react'
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom'

import { AsyncComponent } from '../components/base/asyncComponent'

import DefaultLayout from 'layouts/defaultLayout'

export const Router = () => {
  return (
    <Routes>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact sensitive>
            <AsyncComponent path="views/home" />
          </Route>
          <Route path="/privacy" exact sensitive>
            <AsyncComponent path="views/privacy" />
          </Route>
          <Route path="/404" exact sensitive>
            <AsyncComponent path="views/notFound" />
          </Route>
          <Redirect path="*" exact to="/404" />
        </Switch>
      </DefaultLayout>
    </Routes>
  )
}
