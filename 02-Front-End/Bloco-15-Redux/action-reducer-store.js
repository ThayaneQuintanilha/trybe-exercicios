const estadoInicial = {
  login: false,
  email: '',
};

const reducer = (state = estadoInicial) => {
  return state;
};

const store = Redux.createStore(reducer2);

console.log(store.getState());