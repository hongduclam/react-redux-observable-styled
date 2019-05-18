import { GET_LIST_ITEMS } from "./item.types";

export const listItems = {
  start: payload => {
    return {
      type: GET_LIST_ITEMS.START,
      payload
    };
  },
  success: data => {
    return {
      type: GET_LIST_ITEMS.SUCCESS,
      payload: data
    };
  },
  canceled: error => {
    return {
      type: GET_LIST_ITEMS.CANCEL,
      error: error
    };
  },
  error: error => {
    return {
      type: GET_LIST_ITEMS.ERROR,
      error: error
    };
  }
};
