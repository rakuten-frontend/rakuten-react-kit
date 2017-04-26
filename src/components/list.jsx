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
export function List( { list } :
                      { list: Array<{name: string, url: string}> }) {

  const content = list.map( (item, index) => {
    if (item === undefined) {
      return '';
    }

    return (
      <li key={index}>
        <a href={`/detail/${item.name}`}>{item.name}</a>
      </li>
    );
  });

  // Return the component structure in HTML
  return(
    <div>
      <p>List of items</p>
      <ul>
        { content }
      </ul>
    </div>
  );
}

/*
 * EOF: src/components/list.jsx
 */
