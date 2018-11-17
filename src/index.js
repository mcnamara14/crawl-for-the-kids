import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index.js'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Switch from 'react-router-dom/Switch'
import { BrowserRouter, Route } from 'react-router-dom'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
