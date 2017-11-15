/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defaultState, State } from "domain/store/state/main";
import { Action } from "domain/store/actions/main";
import { updateCurrentPage } from "domain/store/reduce/currentPage";
import { updateAllItems, updateFilteredItems } from "domain/store/reduce/list";
import { displayDetail } from "domain/store/reduce/detail";

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return updateCurrentPage(state, action.page);

    case "UPDATE_ALL_ITEMS":
      return updateAllItems(state, action.allItems);

    case "UPDATE_FILTERED_ITEMS":
      return updateFilteredItems(state, action.filteredItems);

    case "DISPLAY_DETAIL":
      return displayDetail(state, action.detail);

    default:
      return state;
  }
}
