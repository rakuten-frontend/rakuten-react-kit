/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/renderer.jsx
 */

// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import getLogger from 'domain/logger';
import { state } from 'domain/store/main';
import App from 'components/app';

// Make logger available
const logger = getLogger('Renderer');

// This function is responsible for rendering the application
export default function render(): void {
  // Log the rendering start time
  logger.time('DOM Render');

  // Pass all props to the App component, and render to the target DOM element.
  ReactDOM.render(<App state={state()} />, document.getElementById('app'));

  // Log the rendering end time
  logger.timeEnd('DOM Rendered');
}

// Start hot module
if (module.hot) {
  module.hot.accept('components/app', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}

/*
 * EOF: src/renderer.jsx
 */
