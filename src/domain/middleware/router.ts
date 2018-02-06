/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import page from 'page';

import { getLogger } from 'domain/logger';
import { getList, getDetailByName, onListFromNetwork, onDetailFromNetwork } from 'domain/middleware/network';
import { currentPage } from 'domain/store/reducers/main';

type Context = { params: { name: string } };
type OnRoute = (ctx: Context) => void;

const logger = getLogger('Middleware/router');

function detailRouter(onRoute : OnRoute) {
  page('/detail/:name', onRoute );
}

function homeRouter(onRoute : OnRoute) {
  page('', onRoute );
}
export default function startRouters() {

  detailRouter((ctx: Context) => {
    logger.debug('Detail route');
    const name = ctx.params.name;
    getDetailByName(name).then(onDetailFromNetwork);
    currentPage({ name: 'DETAIL_PAGE' })
  });

  homeRouter((ctx) => {
    logger.debug('Home route');
    getList().then(onListFromNetwork);
    currentPage({ name: 'HOME_PAGE' })
  });

  page();
}

export function detailRoute(name: string) {
  return `/detail/${name}`;
}
