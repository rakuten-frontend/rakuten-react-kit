/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

export type MarsPage = { name: "MARS_PAGE" };
export type HomePage = { name: "HOME_PAGE" };
export type Page = MarsPage | HomePage;

export type State = {
  currentPage: Page
};

export const defaultState = {
  currentPage: { name: "MARS_PAGE" }
}
