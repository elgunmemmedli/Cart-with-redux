import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducer/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
