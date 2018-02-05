/*
 * Rakuten React kit
 *
 * Copyright © 2017 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { store } from 'domain/store/main';
import render from 'renderer';
import startRouters from 'domain/middleware/router';

store.addWatch('renderLoop', render);
startRouters();
