/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/rakuten-logo.jsx
 * This file defines the 'rakuten-logo' component and how it will be rendered.
 */

// @flow

import React from 'react';

export default function Logo({ height, width }: { height: string, width: string }) {
  return (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        fill="#bf0000"
        d="M934.6 512c0 233.5-189.2 422.6-422.6 422.6-233.6 0-422.6-189-422.6-422.5 0-233.3 189-422.6 422.6-422.6 233.4 0 422.6 189.3 422.6 422.7zM456 739.3v-141h61.2l105.6 141h108l-127.6-170c39.8-28.6 66-75 66-127.7C669 355 598.7 285 512.3 285H369.8v454.2H456zm0-368h56.4c38.8 0 70.5 31.5 70.5 70.3 0 39-31.8 70.5-70.6 70.5H456V371.2z"
      />
    </svg>
  );
}

/*
 * EOF: src/components/rakuten-logo.jsx
 */
