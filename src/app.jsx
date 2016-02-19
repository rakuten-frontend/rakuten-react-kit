/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

import * as ReactDOM from "react-dom";
import * as React from "react";
import {Yes} from "./yes";

function render() {
  ReactDOM.render(
    <Yes text={"hello"} />, document.getElementById("app")
  );
} 

render();

if (module.hot) {
  module.hot.accept();
  render(); 
}