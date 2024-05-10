import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// action name constants
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTbyAMOUNT = "incrementByAmount";

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === INCREMENT) {
    // immutability
    return { amount: state.amount + 1 };
  }
  if (action.type === DECREMENT) {
    return { amount: state.amount - 1 };
  }
  if (action.type === INCREMENTbyAMOUNT) {
    return { amount: state.amount + action.payload };
  }
  return state;
}

// store
const store = createStore(reducer, applyMiddleware(logger.default));

// Action creators

function increment() {
  return { type: INCREMENT };
} 

function decrement() {
  return { type: DECREMENT };
}

function incrementByAmount(value) {
  return { type: INCREMENTbyAMOUNT, payload: value };
}

setInterval(() => {
  store.dispatch(incrementByAmount(5));
}, 2000);

console.log(store.getState());
