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

import { getLogger } from 'domain/logger';
import { State, Page } from 'domain/store/state/main';

const logger = getLogger('Reduce/currentPage');

export function updateCurrentPage( state : State, page: Page ) : State {
  logger.debug(`Update current page ${page.name}`);
  return {...state, currentPage: page};
}
