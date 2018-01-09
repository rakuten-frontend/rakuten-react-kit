/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/detail.jsx
 * This file defines the 'detail' component and how it will be rendered.
 */

// @flow

import React from 'react';

import Logo from 'components/rakuten-logo';

import type { DetailItem } from 'domain/store/state/main';

// Exports List as a importable function
export default function Detail({ detail }: { detail: DetailItem }) {
  // Return the component structure in HTML
  return (
    <div className="content">
      <div className="header">
        <div className="link-back">
          <a href="/">&lt;&lt; Back</a>
        </div>
        <Logo height="100px" width="100px" />
        <h1>Rakuten React Kit</h1>
      </div>
      <div className="detail-info-container">
        <div className="detail-info">
          <img src={detail.sprites.frontDefault} alt={detail.name} />
          <ul>
            <li>name : {detail.name}</li>
            <li>height : {detail.height}</li>
            <li>weight : {detail.weight}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/*
 * EOF: src/components/detail.jsx
 */
