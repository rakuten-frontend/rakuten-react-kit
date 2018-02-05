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

import React from 'react';

import Logo from 'components/rakuten-logo';

// Exports List as a importable function
export default function List({
  list,
  onChangeText,
  detailRoute,
}: {
  list: Array<{ name: string, url: string }>,
  onChangeText: (name: string) => void,
  detailRoute: (name: string) => string,
}) {
  const content = list.map(item => {
    if (item === undefined) {
      return '';
    }

    return (
      <a href={detailRoute(item.name)} key={item.name}>
        <div className="result">{item.name}</div>
      </a>
    );
  });

  // Return the component structure in HTML
  return (
    <div className="content">
      <div className="header">
        <Logo height="100px" width="100px" />
        <h1>Rakuten React Kit</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          onChange={event => onChangeText(event.target.value)}
          placeholder="Search by name"
          className="search-box"
        />
      </div>
      <div className="results-container">
        <h3>Results({list.length})</h3>
        <div>{content}</div>
      </div>
    </div>
  );
}

/*
 * EOF: src/components/list.jsx
 */
