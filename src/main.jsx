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

import { App } from "components/app";
import { startRouters, marsRouter, defaultRouter } from "domain/middleware/router";
import { getLogger } from "domain/logger";

require("style/main.scss");

const logger = getLogger("Main");

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
  };

  function onDefaultRoute(ctx) {
    logger.debug("Default route");
  };

  startRouters([
    partial(marsRouter, onMarsRoute ),
    partial(defaultRouter, onDefaultRoute )
  ]);

}

render();
startRouterMiddleware();

if (module.hot) module.hot.accept();
