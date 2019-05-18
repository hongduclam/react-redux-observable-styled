import ListItemsPage from "./item";

import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import { getListItemsEpic, listItemReducer } from "../services/item";
import { loadingReducer } from "../services/layout";
import { STATE_NAME } from "../constants";

const rootEpic = combineEpics(getListItemsEpic);

export const rootReducer = combineReducers({
  [STATE_NAME.ITEM_LIST]: listItemReducer,
  loadingReducer,
  router: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createHistory();
const routerMiddlewareRedux = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddlewareRedux))
);

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="" component={ListItemsPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
