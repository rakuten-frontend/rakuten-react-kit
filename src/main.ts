/*
 * Rakuten React kit
 *
 * Copyright © 2017 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('style/main');

import { getLogger } from "domain/logger";
import { store } from "domain/store/main";
import startRouters from "domain/middleware/router";
import render from 'renderer';

const logger = getLogger('main');

logger.debug('Subscribing to store');
store.subscribe(render);
logger.debug('Start routers');
startRouters();
