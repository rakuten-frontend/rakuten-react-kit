/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getLogger } from "domain/logger";
import { State, DetailItem } from "domain/store/state/main";

const logger = getLogger("Reduce/detail");

export function displayDetail(state : State, detail: DetailItem) : State {
  logger.debug(`Display detail ${ detail.name }`);
  return {...state, detail};
}
