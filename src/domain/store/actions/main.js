/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import type { Page } from "domain/store/state/main";

export const actionNames = {
  UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE"
}

export type UpdateCurrentPageAction = {
  type: string,
  page: Page
}

export type Action = UpdateCurrentPageAction;

export function updateCurrentPageAction(page: Page) : UpdateCurrentPageAction {
  return { type: actionNames.UPDATE_CURRENT_PAGE, page };
}
