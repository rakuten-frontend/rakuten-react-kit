/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import { createStore } from "redux";
import { reduceApp } from "domain/store/reduce/main";

export const store = createStore(reduceApp);
