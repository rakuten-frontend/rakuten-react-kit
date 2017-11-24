/*
 * Rakuten React kit
 *
 * Copyright © 2017 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from "domain/logger";
import { store } from "domain/store/main";
import startRouters from "domain/middleware/router";
import render from 'renderer';
import Fairybread from 'fairybread';

var sheet = new Fairybread('global');
sheet.add('html', 'height:100%');
sheet.add('body', `
  height: 100%;
  font-family: Asap`);
sheet.add('.content', 'width: 100%;');
sheet.addSpecial(`@import url('https://fonts.googleapis.com/css?family=Asap');`);
sheet.render();

const logger = getLogger('main');
logger.debug('Subscribing to store');
store.subscribe(render);
logger.debug('Start routers');
startRouters();
