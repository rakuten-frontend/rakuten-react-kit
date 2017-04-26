/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/user.js
 *
 * This file represents the 'user actor' in your application.
 * It contains handlers which dispatch all actions as a result of user events.
 */

// @flow

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import type { Item } from "domain/store/state/main";
import { getList, onListFromNetwork } from "domain/middleware/network";
import { updateCurrentPageAction } from "domain/store/actions/main";

import {filter, map, every } from 'lodash';

const logger = getLogger("Middleware/user");

function filterByName(searchWord: string, allItems: Array<Item>): Array<Item> {
  if (searchWord.length > 0) {
    const searchWordsArray = searchWord.replace(/^[\s]+|[\s]+$/g, '').split(/\s/);
    return filter(allItems, item => {
      const results = map(searchWordsArray, word => item.name.search(new RegExp(word, 'i')));
      return every(results, result => result !== -1);
    });
  }
  return allItems;
}

export function onChangeIncrementalSearch(value: string): void {
  logger.debug("Incremental Search user");
  getList().then(list => onListFromNetwork(filterByName(value, list)));
  store.dispatch(updateCurrentPageAction({ name: "HOME_PAGE" }));
}


/*
 * EOF: src/domain/middleware/user.js
 */
