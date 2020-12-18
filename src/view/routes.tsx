import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import ReposetoriesPage from '@view/pages/Reposetories'

export const Routes = () => {
  return (
    <Router history={history}>  
      <Switch>
        <Route exact path="/" component={ReposetoriesPage} />
        <Route component={() => <>404 not found</>} />
      </Switch>
    </Router>
  )
}

export const history = createBrowserHistory()