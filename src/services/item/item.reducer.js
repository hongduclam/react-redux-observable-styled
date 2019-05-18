import { GET_LIST_ITEMS, RESET } from "./item.types";

const initState = {
  error: null,
  listItems: []
};

export const listItemReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_ITEMS.SUCCESS:
      return Object.assign({}, state, {
        listItems: action.payload
      });
    case GET_LIST_ITEMS.ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case RESET:
      return initState;
    default:
      return state;
  }
};
