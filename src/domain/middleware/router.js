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
type OnRoute = (ctx: Object) => void;

export function marsRouter(onRoute : OnRoute) {
  page("/mars/photos", onRoute );
}

export function defaultRouter(onRoute : OnRoute) {
  page("*", onRoute );
}

export function startRouters(routers : Array<Router>) {
  each(routers, (router : Router) => router());
  page();
}
