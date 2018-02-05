/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/logger.js
 * This file defines our 'logger' middleware.
 */

// @flow

import Logger from 'js-logger';

// Initialise logger.
Logger.useDefaults();

// Export getLogger as an importable function
export default function getLogger(name: string): Logger {
  return Logger.get(name);
}

/*
 * EOF: src/domain/logger.js
 */
