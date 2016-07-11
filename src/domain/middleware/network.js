/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
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
