/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

export function App({ text } : { text: string } ) {
  return (
    <div>
      <p>Rakuten says { text }</p>
    </div>
  );
}
