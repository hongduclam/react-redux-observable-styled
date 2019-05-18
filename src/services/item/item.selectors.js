import { createSelector } from "reselect";
import { createLoadingSelector } from "../layout";
import { STATE_NAME } from "../../constants";

const itemsSelector = state => state[STATE_NAME.ITEM_LIST];
const generateSelector = key =>
  createSelector(
    itemsSelector,
    state => state[key]
  );

export const errorSelector = generateSelector("error");
export const listItemsSelector = generateSelector("listItems");
export const loadingSelector = createLoadingSelector(["GET_LIST_ITEMS"]);
