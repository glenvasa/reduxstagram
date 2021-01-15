// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

//we need a reducer for each piece of state
// this is the posts reducer
function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
