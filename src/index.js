import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'scss/main.scss'

import Routes from 'routes'
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'context/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <BrowserRouter>
          <TopBar />
          <Routes />
        </BrowserRouter>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
