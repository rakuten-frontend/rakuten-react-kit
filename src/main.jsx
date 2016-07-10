/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";
import { partial } from "lodash";
import { createStore } from "redux";

import { getLogger } from "domain/logger";
import { startRouters, marsRouter, defaultRouter } from "domain/middleware/router";
import { getUsers } from "domain/middleware/network";
import type { State } from "domain/store/state/main";
import { reduceApp } from "domain/store/reduce/main";
import { updateCurrentPageAction } from "domain/store/actions/main";
import { App } from "components/app";

require("style/main.scss");

const logger = getLogger("Main");

const store = createStore(reduceApp);

function render() : void {
  logger.time("Render");

  const state : State = store.getState();
  const text = "hello";
  const currentPageName = state.currentPage.name;

  ReactDOM.render(
    <App text={text} currentPageName={currentPageName} />,
    document.getElementById("app")
  );

  logger.timeEnd("Render");
}

function onUsersFromNetwork(pictures : Array<string>) {
  logger.debug("Users from network");
}

function startRouterMiddleware() : void {

  function onUsersRoute(ctx) {
    logger.debug("Users route");
    getUsers().then(onUsersFromNetwork);
    store.dispatch(updateCurrentPageAction({ name: "USERS_PAGE" }));
  };

  function onDefaultRoute(ctx) {
    logger.debug("Default route");
    store.dispatch(updateCurrentPageAction({ name: "HOME_PAGE" }));
  };

  startRouters([
    partial(marsRouter, onUsersRoute ),
    partial(defaultRouter, onDefaultRoute )
  ]);

}

store.subscribe(render);
startRouterMiddleware();


if (module.hot) module.hot.accept();
