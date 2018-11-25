import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { theme } from '../src/components/CrawlTheme'
import rootReducer from '../src/reducers/index.js'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Bar from './components/Bar/Bar'
import Bars from './components/Bars/Bars'
import Group from './components/Group/Group'
import Switch from 'react-router-dom/Switch'
import { BrowserRouter, Route } from 'react-router-dom'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bar" component={Bar} />
          <Route exact path="/group" component={Group} />
          <Route exact path="/bars" component={Bars} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
