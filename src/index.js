import {createStore} from 'redux';

//reducer must be free from calculations and depend only from input action and state;
const reducer = (state = 0, action) => {
  switch (action.type) {
  case 'INC':
    return state + 1;
  case 'DEC': 
    return state - 1;
  case 'RND': 
    return state + action.value;
  default:
    return state;
  }
};

// let state = reducer(undefined, {});
// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);

//action creators
const inc = () => ({ type: 'INC'});
const dec = () => ({ type: 'DEC'});
const rnd = (value) => ({ type: 'RND', value});

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10 );
  // input values here, inside action:
  store.dispatch(rnd(value));
});

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10 );
//   // input values here, inside action:
//   store.dispatch({type: 'RND', value});
// });

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);

// Subscribe before action dispatch. Executes after state change (action dispatch which changed state)
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});


