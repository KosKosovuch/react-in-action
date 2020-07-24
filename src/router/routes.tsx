import React from 'react'
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom'

// components
import { AsyncComponent } from '../components/base/asyncComponent'

// layouts
import DefaultLayout from 'layouts/defaultLayout'

export const Router = () => {
  return (
    <Routes>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact sensitive children={<AsyncComponent path="views/home" />} />
          <Route path="/privacy" exact sensitive children={<AsyncComponent path="views/privacy" />} />
          <Route path="/auth" sensitive children={<AsyncComponent path="modules/auth" />} />
          <Route path="/todo" sensitive children={<AsyncComponent path="modules/todo" />} />
          <Route path="/404" exact sensitive children={<AsyncComponent path="views/notFound" />} />
          <Redirect path="*" exact to="/404" />
        </Switch>
      </DefaultLayout>
    </Routes>
  )
}
