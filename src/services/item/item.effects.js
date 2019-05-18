import { GET_LIST_ITEMS } from "./item.types";
import { listItems } from "./item.actions";
import { Observable } from "rxjs";
import { getListItems } from "../api";

export const getListItemsEpic = (action$, ...rest) => {
  return action$
    .ofType(GET_LIST_ITEMS.START)
    .switchMap(action => {
      return getListItems(action.payload).map(response => {
        if (response.status === 500) {
          throw response.message;
        }
        return listItems.success(response.data);
      });
    })
    .takeUntil(action$.ofType(listItems.canceled()))
    .catch(error => {
      return Observable.of(listItems.error(error));
    });
};
