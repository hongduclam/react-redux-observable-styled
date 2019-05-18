import ListItemsPage from "./item";

import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";

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
  loadingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/" component={ListItemsPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
