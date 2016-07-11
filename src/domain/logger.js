/*
 * Rakuten React Starter Kit ES6
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import Logger from "js-logger";


Logger.useDefaults();

export function getLogger(name : string) : Logger {
  return Logger.get(name);
}
