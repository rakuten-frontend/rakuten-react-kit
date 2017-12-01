/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from "domain/logger";
import { store } from "domain/store/main";
import { updateAllItemsAction, updateFilteredItemsAction, displayDetailAction } from "domain/store/actions/main";
import { Item, DetailItemFromNetwork, DetailItem } from "domain/store/state/main";

type Pokemon = { pokemon: {pokemon: { name: string, url: string }}[] };

const logger = getLogger("Middleware/network");
const URL = 'https://pokeapi.co/api/v2/type/1/';
const URL_DETAIL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getList() {
  logger.debug('Requesting list from network', '- list -');
  const resp = await fetch(URL);
  if (resp.ok) {
    const data: Pokemon = await resp.json();
    return data.pokemon.map(e => (
      {
        name: e.pokemon.name,
        url: e.pokemon.url
      }))}
  else throw new TypeError("getList response is not Ok");
}

export async function getDetailByName(name: string) {
  logger.debug('Requesting from network','- element -', name);
  const resp = await fetch(`${URL_DETAIL}${name}`);
  if (resp.ok) {
    return resp.json()
  }
  else throw new TypeError("getDetailByName response is not Ok");
}

export function onListFromNetwork(list : Array<Item>) {
  logger.debug("List from network");
  store.dispatch(updateAllItemsAction(list));
  store.dispatch(updateFilteredItemsAction(list));
}

function camelCaseImageFront(detail : DetailItemFromNetwork): DetailItem {
  return { 
    ...detail,
    sprites: {
      frontDefault: detail.sprites.front_default
    }
  };
}

export function onDetailFromNetwork(detail : DetailItemFromNetwork) {
  logger.debug("Detail from network");
  store.dispatch(displayDetailAction(camelCaseImageFront(detail)))
}
