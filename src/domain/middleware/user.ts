/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from 'domain/logger';
import {filter, map, every } from 'lodash';
import { store, state } from 'domain/store/main';
import { updateFilteredItemsAction } from 'domain/store/actions/main';
import { Item } from 'domain/store/state/main';

const logger = getLogger('Middleware/user');

function filterByName(name: string): Array<Item> {
  const allItems = state().allItems;
  if (name.length > 0) {
    const searchWordsArray = name.replace(/^[\s]+|[\s]+$/g, '').split(/\s/);
    return filter(allItems, item => {
      const results = map(searchWordsArray, word => item.name.search(new RegExp(word, 'i')));
      return every(results, result => result !== -1);
    });
  }
  return allItems;
}

export function onChangeIncrementalSearch(name: string): void {
  logger.debug('Incremental Search By Name');
  store.dispatch(updateFilteredItemsAction(filterByName(name)));
}
