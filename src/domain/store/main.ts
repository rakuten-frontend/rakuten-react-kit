/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createAtom } from 'js-atom';

export type HomePage = { name: 'HOME_PAGE' };

export type DetailPage = { name: 'DETAIL_PAGE' };

export type Page = HomePage | DetailPage;

export type Item = { name: string; url: string };

export type DetailItem = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    frontDefault: string;
  };
};

export type DetailItemFromNetwork = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export type State = {
  currentPage: Page;
  allItems: Array<Item>;
  filteredItems: Array<Item>;
  detail: DetailItem;
  shadowColor: string;
  loading: boolean;
};

const defaultState: State = {
  currentPage: { name: 'HOME_PAGE' },
  allItems: [],
  filteredItems: [],
  detail: {
    name: '',
    height: 0,
    weight: 0,
    sprites: {
      frontDefault: ''
    }
  },
  shadowColor: '#000',
  loading: true
};

export const store = createAtom(defaultState);
