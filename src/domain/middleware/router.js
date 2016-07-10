/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import page from "page";
import { each } from "lodash";

type Router = () => void;

export function marsRouter(f : Router) {
  page("/mars/photos", f );
}

export function defaultRouter(f : Router) {
  page("*", f );
}

export function startRouters(routers : Array<Router>) {
  each(routers, (f) => f());
  page();
}
