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
import { Item } from 'domain/store/main';
import { allItems } from 'domain/store/selectors/main';
import { updateFileteredItems } from 'domain/store/reduce/main';

const logger = getLogger('Middleware/user');

function filterByName(name: string): Array<Item> {
  const items = allItems();
  if (name.length > 0) {
    const searchWordsArray = name.replace(/^[\s]+|[\s]+$/g, '').split(/\s/);
    return filter(items, item => {
      const results = map(searchWordsArray, word => item.name.search(new RegExp(word, 'i')));
      return every(results, result => result !== -1);
    });
  }
  return items;
}

export function onChangeIncrementalSearch(name: string): void {
  logger.debug('Incremental Search By Name');
  updateFileteredItems(filterByName(name));
}
