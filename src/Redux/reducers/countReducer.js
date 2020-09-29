import { INCREMENT, DECREMENT, RESET } from "../Constants/actionsTypes";

const intialState = {
  counter: 0,
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
export default counterReducer;
