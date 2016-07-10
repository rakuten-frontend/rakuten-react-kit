/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { Users } from "components/users";

export function App({ text, currentPageName } :
                    { text: string, currentPageName: string } ) {

  const content = ((pageName) => {
    switch (pageName) {
      case "USERS_PAGE":
        return <Users />;
      default:
        return(
          <div>
            <p> Rakuten says {text} </p>
            <a href="/users">List of users</a>
          </div>
        );
    }
  })(currentPageName);

  return (
    <div>
      { content }
    </div>
  );
}
