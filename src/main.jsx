/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/main.jsx
 * This is the application bootstrap, the entry point of your application.
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { startRouters } from "domain/middleware/router";
import type { State } from "domain/store/state/main";

import { App } from "components/app";

// import stylesheets
require("style/main.scss");

// Make logger available
const logger = getLogger("Main");

// This function is responsible for rendering the application
function render() : void {

  // Log the rendering start time
  logger.time("Render");

  // Retrieve the application state from the Store
  const state : State = store.getState();

  // Select your props from the state
  const text = "hello";
  const currentPageName = state.currentPage.name;
  const users = state.users;

  // Pass all props to the App component, and render to the target DOM element.
  ReactDOM.render(
    <App text={text} currentPageName={currentPageName} users={users} />,
    document.getElementById("app")
  );

  // Log the rendering end time
  logger.timeEnd("Render");

}

// Subscribe to the store and to ensure it will re-render your app
// whenever there is a store update.
store.subscribe(render);

// Start routing
// @see domain/middleware/router.js
startRouters();

// Start hot module
if (module.hot) {
  module.hot.accept();
  render();
}

/*
 * EOF: src/main.jsx
 */
