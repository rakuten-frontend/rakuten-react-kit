/*
 * Rakuten React Starter Kit ES6
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

export type UsersPage = { name: "USERS_PAGE" };
export type HomePage = { name: "HOME_PAGE" };
export type Page = UsersPage | HomePage;
export type User = { firstName: string, lastName: string};

export type State = {
  currentPage: Page,
  users: Array<User>
};

export const defaultState = {
  currentPage: { name: "HOME_PAGE" },
  users: []
}
