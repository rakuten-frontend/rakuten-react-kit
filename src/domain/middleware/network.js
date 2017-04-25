/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/network.js
 *
 * This file represents the 'network actor' in your application.
 * It contains handlers which dispatch all actions as a result of network events.
 */

// @flow

import axios from "axios";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import type { Item } from "domain/store/state/main";
import { updateListAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/network");

const URL = 'http://pokeapi.co/api/v2/type/1/';

// Make getList a importable function
export function getList() {
  // Make the network call via ajax using axios
  return axios.get(URL)
      // Whenever it is ready, it will resolve the event and set its result
       .then(response => {
         return response.data.pokemon.map(obj => {
           return {
             name: obj.pokemon.name,
             url: obj.pokemon.url
           };
         });
       })
       // Or it will throw an error
      .catch( err => {
        console.error(err);
      });
}

// Make onListFromNetwork a importable function
export function onListFromNetwork(list : Array<Item>) {
  logger.debug("List from network");
  // Dispatch an action ...
  store.dispatch(updateListAction(list));
}

/*
 * EOF: src/domain/middleware/network.js
 */
