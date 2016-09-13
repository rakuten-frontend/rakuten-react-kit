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
 * This file defines the actions for your application. It can be broken down
 * into many different files depending on the size of your application. If you
 * do, keep naming consistent and use this file as an index.
 */

// @flow

import type { Page, User } from "domain/store/state/main";

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
  return { type: "UPDATE_CURRENT_PAGE", page };
}

export function updateUsersAction(users: Array<User>) {
  return { type: "UPDATE_USERS", users}
}

/*
 * EOF: src/domain/store/actions/main.js
 */
