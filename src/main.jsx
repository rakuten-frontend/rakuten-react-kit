/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { startRouters } from "domain/middleware/router";
import type { State } from "domain/store/state/main";

import { App } from "components/app";

require("style/main.scss");

const logger = getLogger("Main");


function render() : void {
  logger.time("Render");

  const state : State = store.getState();
  const text = "hello";
  const currentPageName = state.currentPage.name;
  const users = state.users;

  ReactDOM.render(
    <App text={text} currentPageName={currentPageName} users={users} />,
    document.getElementById("app")
  );

  logger.timeEnd("Render");
}

store.subscribe(render);
startRouters();

if (module.hot) module.hot.accept();
