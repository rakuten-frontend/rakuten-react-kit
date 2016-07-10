/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import { Map } from "immutable";
import { getLogger } from "domain/logger";
import type { State, Page } from "domain/store/state/main";

const logger = getLogger("Reduce/currentPage");

export function updateCurrentPage( state : State, page: Page ) : State {
  logger.debug(`Update current page ${page.name}`);
  return new Map(state).set("currentPage", page).toJS();
}
