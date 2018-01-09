/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/main.jsx
 * This is the application bootstrap, the entry point of your application.
 */

// @flow

import getLogger from 'domain/logger';
import { store } from 'domain/store/main';
import startRouters from 'domain/middleware/router';
import render from './renderer';

// import stylesheets
require('../style/main.scss');

// Make logger available
const logger = getLogger('Main');

// Subscribe to the store and to ensure it will re-render your app
// whenever there is a store update.
logger.debug('Subscribing to store');
store.subscribe(render);

// Start routing
// @see domain/middleware/router.js
logger.debug('Start routers');
startRouters();

/*
 * EOF: src/main.jsx
 */
