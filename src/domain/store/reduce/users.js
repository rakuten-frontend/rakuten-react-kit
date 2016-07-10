/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
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
