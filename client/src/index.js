 import 'materialize-css/dist/css/materialize.min.css'
 import React from 'react'
 import reduxThunk from 'redux-thunk'
 import ReactDOM from 'react-dom'
 import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import combineReducer from './redux/reducers/combineReducer'
const store= createStore(combineReducer,applyMiddleware(reduxThunk))
ReactDOM.render(
    <Provider store={store }><BrowserRouter>
                            <App/>
                </BrowserRouter></Provider>,
    document.querySelector('#root'))