/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/store/main.js
 * This file is the 'index' file from store.
 */

// @flow

import { createStore } from "redux";
import { reduceApp } from "domain/store/reduce/main";

// Create the store and make it an importable constant
export const store = createStore(reduceApp);

/*
 * EOF: src/domain/store/main.js
 */
