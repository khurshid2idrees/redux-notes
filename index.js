import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

// action name constants
const INIT = "init";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTbyAMOUNT = "incrementByAmount";

// reducer
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case INIT:
      return { amount: action.payload };
    case INCREMENT:
      return { amount: state.amount + 1 };
    case DECREMENT:
      return { amount: state.amount - 1 };
    case INCREMENTbyAMOUNT:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}
// store
const store = createStore(reducer, applyMiddleware(logger.default));

// Action creators

function initUser(value) {
  return { type: "init", payload: value };
}

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
  store.dispatch(initUser(5));
}, 2000);

console.log(store.getState());
