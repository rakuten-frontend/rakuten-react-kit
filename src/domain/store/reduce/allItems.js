/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/reduce/allItems.js
 * This file is responsible for updating 'list' in our state.
 */

// @flow

import { Map } from "immutable";
import { getLogger } from "domain/logger";
import type { State, Item } from "domain/store/state/main";

const logger = getLogger("Reduce/allItems");

export function updateAllItems(state : State, allItems: Array<Item>) : State {
  logger.debug(`Update list ${allItems.map(item => item.name).toString()}`);
  return new Map(state).set("allItems", allItems).toJS();
}

/*
 * EOF: src/domain/store/reduce/allItems.js
 */
