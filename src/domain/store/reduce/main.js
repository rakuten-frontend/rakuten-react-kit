/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import { defaultState } from "domain/store/state/main";
import type { State } from "domain/store/state/main";
import { actionNames } from "domain/store/actions/main";
import type { Action } from "domain/store/actions/main";
import { updateCurrentPage } from "domain/store/reduce/currentPage";
import { updateUsers } from "domain/store/reduce/users";

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    case actionNames.UPDATE_CURRENT_PAGE:
      return updateCurrentPage(state, action.page);

    case actionNames.UPDATE_USERS:
      return updateUsers(state, action.users);

    default:
      return state;
  }
}
