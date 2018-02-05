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

import axios from 'axios';

import { fromJS } from 'immutable';
import getLogger from 'domain/logger';

import { store } from 'domain/store/main';
import { updateAllItemsAction, updateFilteredItemsAction, displayDetailAction } from 'domain/store/actions/main';

import type { Item, DetailItemFromNetwork } from 'domain/store/state/main';

const logger = getLogger('Middleware/network');

const URL = 'https://pokeapi.co/api/v2/type/1/';
const URL_DETAIL = 'https://pokeapi.co/api/v2/pokemon/';

export function getList() {
  logger.debug('Requesting list from network');
  return axios
    .get(URL)
    .then(response =>
      response.data.pokemon.map(obj => ({
        name: obj.pokemon.name,
        url: obj.pokemon.url,
      }))
    )
    .catch(logger.error);
}

export function getDetailByName(name: string) {
  return axios
    .get(`${URL_DETAIL}${name}`)
    .then(response => response.data)
    .catch(logger.error);
}

export function onListFromNetwork(list: Array<Item>) {
  logger.debug('List from network');
  store.dispatch(updateAllItemsAction(list));
  store.dispatch(updateFilteredItemsAction(list));
}

function camelCaseImageFront(detail: DetailItemFromNetwork) {
  return fromJS(detail)
    .setIn(['sprites', 'frontDefault'], detail.sprites.front_default)
    .toJS();
}

export function onDetailFromNetwork(detail: DetailItemFromNetwork) {
  logger.debug('Detail from network');
  store.dispatch(displayDetailAction(camelCaseImageFront(detail)));
}

/*
 * EOF: src/domain/middleware/network.js
 */
