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

import * as React from "react";

import type { DetailItem } from "domain/store/state/main";

// Exports List as a importable function
export function Detail( { detail } :
                        { detail: DetailItem }) {

  // Return the component structure in HTML
  return(
    <div>
      <h1>Profile</h1>
      <div><img src={ detail.sprites.frontDefault } alt={detail.name} /></div>
      <ul>
        <li>name: { detail.name }</li>
        <li>height: { detail.height }</li>
        <li>weight: { detail.weight }</li>
      </ul>
    </div>
  );
}

/*
 * EOF: src/components/detail.jsx
 */
