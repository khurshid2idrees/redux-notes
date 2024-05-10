import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// store

const store = createStore(reducer, applyMiddleware(logger.default));


// action name 


// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    // immutability
    return { amount: state.amount + 1 };
  }
  if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type === "incrementByAmount") {
    return { amount: state.amount + action.payload };
  }
  return state;
}



// Action creators

function increment() {
  return { type: "increment" };
}

function decrement() {
  return { type: "decrement" };
}

function incrementByAmount(value) {
  return { type: "incrementByAmount" , payload:value};
}


setInterval(() => {
store.dispatch(incrementByAmount(5));
}, 2000);


console.log(store.getState());
