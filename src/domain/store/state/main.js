/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
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
