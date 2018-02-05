/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Page, Item, DetailItem } from 'domain/store/state/main';

export type UpdateCurrentPageAction = {
  type: 'UPDATE_CURRENT_PAGE',
  page: Page
}

export type UpdateAllItemsAction = {
  type: 'UPDATE_ALL_ITEMS',
  allItems: Array<Item>
}

export type UpdateFilteredItemsAction = {
  type: 'UPDATE_FILTERED_ITEMS',
  filteredItems: Array<Item>
}

export type DisplayDetailAction = {
  type: 'DISPLAY_DETAIL',
  detail: DetailItem
}

export type Action = UpdateCurrentPageAction | UpdateAllItemsAction | UpdateFilteredItemsAction | DisplayDetailAction;

export function updateCurrentPageAction(page: Page) : UpdateCurrentPageAction {
  return { type: 'UPDATE_CURRENT_PAGE', page };
}

export function updateAllItemsAction(allItems: Array<Item>) {
  return { type: 'UPDATE_ALL_ITEMS', allItems }
}

export function updateFilteredItemsAction(filteredItems: Array<Item>) {
  return { type: 'UPDATE_FILTERED_ITEMS', filteredItems }
}

export function displayDetailAction(detail: DetailItem) {
  return { type: 'DISPLAY_DETAIL', detail }
}
