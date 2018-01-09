/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/reduce/currentPage.js
 * This file is responsible for updating 'currentPage' in our state.
 */

// @flow

import { Map } from 'immutable';
import getLogger from 'domain/logger';
import type { State, Page } from 'domain/store/state/main';

const logger = getLogger('Reduce/currentPage');

export default function updateCurrentPage(state: State, page: Page): State {
  logger.debug(`Update current page ${page.name}`);
  return new Map(state).set('currentPage', page).toJS();
}

/*
 * EOF: src/domain/store/reduce/currentPage.js
 */
