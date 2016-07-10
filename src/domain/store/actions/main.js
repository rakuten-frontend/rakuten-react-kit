/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import type { Page, User } from "domain/store/state/main";

export const actionNames = {
  UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
  UPDATE_USERS: "UPDATE_USERS"
}

// FIXME Is there a way to get aciton types from actionNames?
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
