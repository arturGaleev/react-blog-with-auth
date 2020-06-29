import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'scss/main.scss'

import Routes from 'routes'
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'context/currentUser'

const App = () => {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
