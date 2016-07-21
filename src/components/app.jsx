/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { Users } from "components/users";

// Define App as an importable function
export function App({ text, currentPageName, users } :
                    { text: string,
                      currentPageName: string,
                      users : Array<{firstName: string, lastName: string}> } ) {

  // Define a 'content' variable which outputs content
  // according to the page routed to.
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

  // Return the component structure in HTML
  return (
    <div>
      { content }
    </div>
  );
}

/*
 * EOF: src/components/app.jsx
 */
