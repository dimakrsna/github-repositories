import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary } from '@view/shared/ErrorBoundary'
import { store } from '@store/store'
import { Routes } from '@view/routes'
import Notify from '@view/shared/Notify'
import '@assets/styles/index.scss' 

interface Props { }

const App: React.FC<Props> = () => {

  return (
    <ErrorBoundary>
      <Routes />
      <Notify />
    </ErrorBoundary>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root') as HTMLElement)
