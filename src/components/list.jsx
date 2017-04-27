/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/list.jsx
 * This file defines the 'list' component and how it will be rendered.
 */

// @flow

import * as React from "react";

// Exports List as a importable function
export function List( { list,
                        router } :
                      { list: Array<{name: string, url: string}>,
                        router: ( name: string ) => string }) {

  const content = list.map( (item, index) => {
    if (item === undefined) {
      return '';
    }

    return (
      <li key={index}>
        <a href={router(item.name)}>{item.name}</a><br/>
      </li>
    );
  });

  // Return the component structure in HTML
  return(
    <div>
      <h1>List of items</h1>
      <ul>
        { content }
      </ul>
    </div>
  );
}

/*
 * EOF: src/components/list.jsx
 */
