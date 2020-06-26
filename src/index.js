import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'scss/main.scss'

import Routes from 'routes'
import TopBar from 'components/topBar'

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
