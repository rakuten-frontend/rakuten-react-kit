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

import { fromJS } from 'immutable';
import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { updateListAction, updateAllItemsAction, displayDetailAction } from "domain/store/actions/main";

import type { Item, DetailItemFromNetwork } from "domain/store/state/main";

const logger = getLogger("Middleware/network");

const URL = 'http://pokeapi.co/api/v2/type/1/';
const URL_DETAIL = 'http://pokeapi.co/api/v2/pokemon/';

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

export function getDetailByName(name: string) {
  // Make the network call via ajax using axios
  return axios.get(`${URL_DETAIL}${name}`)
      // Whenever it is ready, it will resolve the event and set its result
      .then(response => {
        return response.data;
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
  store.dispatch(updateAllItemsAction(list));
}

function camelCaseImageFront(detail : DetailItemFromNetwork) {
  return fromJS(detail).setIn(['sprites', 'frontDefault'], detail.sprites.front_default).toJS();
}

export function onDetailFromNetwork(detail : DetailItemFromNetwork) {
  logger.debug("Detail from network");
  store.dispatch(displayDetailAction(camelCaseImageFront(detail)))
}

/*
 * EOF: src/domain/middleware/network.js
 */
