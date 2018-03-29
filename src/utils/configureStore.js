import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import mySaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()




export default function configureStore(initialState) {
  const store = createStore(rootReducer, devToolsEnhancer(), applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(mySaga)
  return store
}

