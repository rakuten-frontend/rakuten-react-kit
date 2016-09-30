/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/reduce/main.js
 *
 * This file is the 'index' of application store reducers. It is responsible
 * for updating the current store state according to actions types.
 */

// @flow

import { defaultState } from "domain/store/state/main";
import type { State } from "domain/store/state/main";
import type { Action } from "domain/store/actions/main";
import { updateCurrentPage } from "domain/store/reduce/currentPage";
import { updateUsers } from "domain/store/reduce/users";

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return updateCurrentPage(state, action.page);

    case "UPDATE_USERS":
      return updateUsers(state, action.users);

    default:
      return state;
  }
}

/*
 * EOF: src/domain/store/reduce/main.js
 */
