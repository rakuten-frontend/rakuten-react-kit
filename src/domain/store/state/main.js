/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/state/main.js
 * This file is contains our application state and type definitions.
 */

// @flow

export type ListPage = { name: "LIST_PAGE" };
export type HomePage = { name: "HOME_PAGE" };
export type Page = ListPage | HomePage;
export type Item = { name: string, url: string};

export type State = {
  currentPage: Page,
  list: Array<Item>
};

export const defaultState = {
  currentPage: { name: "HOME_PAGE" },
  list: []
};

/*
 * EOF: src/domain/store/state/main.js
 */
