/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/actions/main.js
 *
 * This file defines the actions for your appliation. It can be broken down
 * into many different files depending on the size of your application. If you
 * slice it, make sure to keep name consistense and make this file as an index
 * for all those other files.
 */

// @flow

import type { Page, User } from "domain/store/state/main";

export const actionNames = {
  UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
  UPDATE_USERS: "UPDATE_USERS"
};

// FIXME Is there a way to get action types from actionNames?
export type UpdateCurrentPageAction = {
  type: "UPDATE_CURRENT_PAGE",
  page: Page
}

export type UpdateUsersAction = {
  type: "UPDATE_USERS",
  users: Array<User>
}

export type Action = UpdateCurrentPageAction | UpdateUsersAction;

export function updateCurrentPageAction(page: Page) : UpdateCurrentPageAction {
  return { type: actionNames.UPDATE_CURRENT_PAGE, page };
}

export function updateUsersAction(users: Array<User>) {
  return { type: actionNames.UPDATE_USERS, users}
}

/*
 * EOF: src/domain/store/actions/main.js
 */
