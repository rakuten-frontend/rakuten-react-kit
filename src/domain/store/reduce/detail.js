/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/reduce/detail.js
 * This file is responsible for updating 'list' in our state.
 */

// @flow
import { fromJS } from 'immutable';
import getLogger from 'domain/logger';
import type { State, DetailItem } from 'domain/store/state/main';

const logger = getLogger('Reduce/detail');

export default function displayDetail(state: State, detail: DetailItem): State {
  logger.debug(`Display detail ${detail.name}`);
  return fromJS(state)
    .set('detail', detail)
    .toJS();
}

/*
 * EOF: src/domain/store/reduce/detail.js
 */
