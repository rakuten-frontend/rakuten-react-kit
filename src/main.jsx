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
import { reduceApp } from "domain/store/reduce/main";
import { updateCurrentPageAction } from "domain/store/actions/main";
import { App } from "components/app";

require("style/main.scss");

const logger = getLogger("Main");

const store = createStore(reduceApp);

function render() : void {
  logger.time("Render");
  ReactDOM.render(
    <App text={"hello"} />, document.getElementById("app")
  );
  logger.timeEnd("Render");
}

function startRouterMiddleware() : void {

  function onMarsRoute(ctx) {
    logger.debug("Mars route");
    store.dispatch(updateCurrentPageAction({ name: "MARS_PAGE" }));
  };

  function onDefaultRoute(ctx) {
    logger.debug("Default route");
    store.dispatch(updateCurrentPageAction({ name: "HOME_PAGE" }));
  };

  startRouters([
    partial(marsRouter, onMarsRoute ),
    partial(defaultRouter, onDefaultRoute )
  ]);

}

render();
startRouterMiddleware();

if (module.hot) module.hot.accept();
