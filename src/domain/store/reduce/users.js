/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import { Map } from "immutable";
import { map } from "lodash";
import { getLogger } from "domain/logger";
import type { State, User } from "domain/store/state/main";

const logger = getLogger("Reduce/users");

export function updateUsers(state : State, users: Array<User>) : State {
  logger.debug(`Update users ${map(users, (user) => user.firstName)}`);
  return new Map(state).set("users", users).toJS();
}
