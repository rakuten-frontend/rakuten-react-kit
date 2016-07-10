/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import { defaultState } from "domain/store/state/main";
import type { State } from "domain/store/state/main";
import { actionNames } from "domain/store/actions/main";
import type { Action } from "domain/store/actions/main";
import { updateCurrentPage } from "domain/store/reduce/currentPage";

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    case actionNames.UPDATE_CURRENT_PAGE:
      return updateCurrentPage(state, action.page);
    default:
      return state;
  }
}
