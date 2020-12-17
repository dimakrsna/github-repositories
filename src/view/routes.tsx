import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import UsersListPage from '@view/pages/UsersListRage'

export const Routes = () => {
  return (
    <Router history={history}>  
      <Switch>
        <Route exact path="/" component={UsersListPage} />
        <Route component={() => <>404 not found</>} />
      </Switch>
    </Router>
  )
}

export const history = createBrowserHistory()