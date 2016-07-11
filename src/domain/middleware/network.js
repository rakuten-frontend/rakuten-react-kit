/*
 * Rakuten React Starter Kit ES6
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import $ from "jquery";
import { map } from "lodash";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import type { User } from "domain/store/state/main";
import { updateUsersAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/network");

export function getUsers() {
  const d = $.Deferred();
  $.getJSON("http://reqres.in/api/users?page=2").then((response) => {
    d.resolve(map(response.data,
      (datum) => {
        return {firstName: datum.first_name, lastName: datum.last_name}}))});
  return d.promise();
}

export function onUsersFromNetwork(users : Array<User>) {
  logger.debug("Users from network");
  store.dispatch(updateUsersAction(users));
}
