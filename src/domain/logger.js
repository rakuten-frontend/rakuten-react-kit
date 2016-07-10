/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import Logger from "js-logger";


Logger.useDefaults();

export function getLogger(name : string) : Logger {
  return Logger.get(name);
}
