/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import $ from "jquery";
import { map } from "lodash";

export function getUsers() {
  const d = $.Deferred();
  $.getJSON("http://reqres.in/api/users?page=2").then((response) => {
    d.resolve(map(response.data,
      (datum) => {
        return {firstName: datum.first_name, lastName: datum.last_name}}))});
  return d.promise();
}
