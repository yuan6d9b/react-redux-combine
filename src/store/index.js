import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import homeReducer from '../store/home'
import userReducer from '../store/user'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store