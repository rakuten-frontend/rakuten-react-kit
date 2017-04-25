/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/router.js
 *
 * This file represents the 'router actor' in your application.
 * It contains handlers which dispatch all actions as a result of url routing events.
 */

// @flow

import page from "page";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { getList, onListFromNetwork } from "domain/middleware/network";
import { updateCurrentPageAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/router");

type OnRoute = (ctx: Object) => void;

function listRouter(onRoute : OnRoute) {
  page("/list/", onRoute );
}

function defaultRouter(onRoute : OnRoute) {
  page("*", onRoute );
}

export function startRouters() {

  listRouter((ctx) => {
    logger.debug("List route");
    getList().then(onListFromNetwork);
    store.dispatch(updateCurrentPageAction({ name: "LIST_PAGE" }));
  });

  defaultRouter((ctx) => {
    logger.debug("Default route");
    store.dispatch(updateCurrentPageAction({ name: "HOME_PAGE" }));
  });

  page();
}

/*
 * EOF: src/domain/middleware/router.js
 */
