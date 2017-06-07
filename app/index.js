import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

import Home from './components/Home'
import About from './components/About'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// HMR Stuff
if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default)
  })
  module.hot.accept()

  module.hot.dispose((data) => {
    /*data.counter = store.getState();
    [].slice.apply(document.querySelector('#root').children).forEach(function(c) { c.remove() })*/
  })
}

// Dispatch navigation actions a la :
// store.dispatch(push('/foo'))


const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
};


if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
