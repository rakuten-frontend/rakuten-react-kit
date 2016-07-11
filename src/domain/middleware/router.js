/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import page from "page";
import { partial } from "lodash";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { getUsers, onUsersFromNetwork } from "domain/middleware/network";
import { updateCurrentPageAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/router");

type OnRoute = (ctx: Object) => void;

function usersRouter(onRoute : OnRoute) {
  page("/users/", onRoute );
}

function defaultRouter(onRoute : OnRoute) {
  page("*", onRoute );
}

export function startRouters() {

  usersRouter((ctx) => {
    logger.debug("Users route");
    getUsers().then(onUsersFromNetwork);
    store.dispatch(updateCurrentPageAction({ name: "USERS_PAGE" }));
  });

  defaultRouter((ctx) => {
    logger.debug("Default route");
    store.dispatch(updateCurrentPageAction({ name: "HOME_PAGE" }));
  });

  page();
}
