import { Add, Remove } from '../Constent';

let initialData = {
  Data: [],
};

export let cardData = (state = [], action) => {
  if (action.type === Add) {
    console.log(action);

    return [...state, { Data: action.data }];
  } 
  else if (action.type === Remove) {
    state.pop()
    return [...state];
  } 
  else {
    return state;
  }
};

// export let cardData = (state = initialData, action) => {

//   if (action.type === Add) {
//     console.log(action);

//     return {
//       ...state,
//       Data: action.data,
//     };
//   } else {
//     return state;
//   }
// };
