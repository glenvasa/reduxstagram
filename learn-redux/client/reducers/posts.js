// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

//we need a reducer for each piece of state
// this is the posts reducer

// Every time an action is dispatched, EVERY
// reducer is run (in our case posts and comments)
// it is up to the code in each reducer to dictate whether
// that particular reducer actually acts and changes
// a piece of state

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
