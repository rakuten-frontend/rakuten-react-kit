/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { Users } from "components/users";

export function App({ text, currentPageName, users } :
                    { text: string,
                      currentPageName: string,
                      users : Array<{firstName: string, lastName: string}> } ) {

  const content = ((pageName) => {
    switch (pageName) {
      case "USERS_PAGE":
        return <Users users={users} />;
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
