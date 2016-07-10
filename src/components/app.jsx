/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { Mars } from "components/mars";

export function App({ text, currentPageName } :
                    { text: string, currentPageName: string } ) {

  const content = ((pageName) => {
    switch (pageName) {
      case "MARS_PAGE":
        return <Mars />;
      default:
        return <p> Rakuten says {text} </p>
    }
  })(currentPageName);

  return (
    <div>
      { content }
    </div>
  );
}
