/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/reduce/list.js
 * This file is responsible for updating 'list' in our state.
 */

// @flow

import { Map } from 'immutable';
import getLogger from 'domain/logger';
import type { State, Item } from 'domain/store/state/main';

const logger = getLogger('Reduce/list');

export function updateAllItems(state: State, allItems: Array<Item>): State {
  logger.debug(`Update all items ${allItems.length} items`);
  return new Map(state).set('allItems', allItems).toJS();
}

export function updateFilteredItems(state: State, list: Array<Item>): State {
  logger.debug(`Update filtered items ${list.length}`);
  return new Map(state).set('filteredItems', list).toJS();
}

/*
 * EOF: src/domain/store/reduce/list.js
 */
