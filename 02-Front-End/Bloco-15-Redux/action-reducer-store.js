const estadoInicial = {
  login: false,
  email: '',
};

const reducer = (state = estadoInicial) => {
  return state;
};

const store = Redux.createStore(reducer2);

console.log(store.getState());

// reducer combinado

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer,
})

export default reducerCombinado;