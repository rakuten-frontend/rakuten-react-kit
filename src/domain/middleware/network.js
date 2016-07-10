/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import $ from "jquery";

export function getUsers() {
  return $.getJSON("http://reqres.in/api/users");
}
