/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/router.js
 *
 * This file represents the 'router actor' in your application.
 * It contains handlers which dispatch all actions as a result of url routing events.
 */

// @flow

import page from 'page';

import getLogger from 'domain/logger';

import { store } from 'domain/store/main';
import { getList, getDetailByName, onListFromNetwork, onDetailFromNetwork } from 'domain/middleware/network';
import { updateCurrentPageAction } from 'domain/store/actions/main';

const logger = getLogger('Middleware/router');

type OnRoute = (ctx: Object) => void;

function detailRouter(onRoute: OnRoute) {
  page('/detail/:name', onRoute);
}

function homeRouter(onRoute: OnRoute) {
  page('', onRoute);
}

export default function startRouters() {
  detailRouter(ctx => {
    logger.debug('Detail route');
    const name = ctx.params.name;
    getDetailByName(name).then(onDetailFromNetwork);
    store.dispatch(updateCurrentPageAction({ name: 'DETAIL_PAGE' }));
  });

  homeRouter(() => {
    logger.debug('Home route');
    getList().then(onListFromNetwork);
    store.dispatch(updateCurrentPageAction({ name: 'HOME_PAGE' }));
  });

  page();
}

export function detailRoute(name: string) {
  return `/detail/${name}`;
}

/*
 * EOF: src/domain/middleware/router.js
 */
