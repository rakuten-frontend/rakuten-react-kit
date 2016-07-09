/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";
import { App } from "components/app";

require("style/main.scss");

function render() : void {
  ReactDOM.render(
    <App text={"hello"} />, document.getElementById("app")
  );
}

render();

if (module.hot) module.hot.accept();
