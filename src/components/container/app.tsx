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

import * as React from 'react';
import Fairybread from 'fairybread';
import { currentPage, filteredItems, detailItem } from 'domain/store/selectors/main';
import { List } from 'components/presentational/list';
import { Detail } from 'components/presentational/detail';
import { detailRoute } from 'domain/middleware/router';
import { onChangeIncrementalSearch } from 'domain/middleware/user';

export function App() {

  const sheet = new Fairybread('global');
  sheet.add('html', 'height:100%');
  sheet.add('body', `
    height: 100%;
    font-family: Asap`);
  sheet.add('.content', 'width: 100%;');
  sheet.addSpecial(`@import url('https://fonts.googleapis.com/css?family=Asap');`);

  const currentPageName = currentPage();

  const content = (pageName => {
    switch (pageName) {
      case 'HOME_PAGE':
        const list = filteredItems();
        return <List list={list} onChangeText={onChangeIncrementalSearch} detailRoute={detailRoute} />;
      case 'DETAIL_PAGE':
        const detail = detailItem();
        return <Detail detail={detail} />;
      default:
        return <p>Page not found</p>;
    }
  })(currentPageName.name);

  return (
    <div>
      <style>{sheet.render('raw').css}</style>
      { content }
    </div>
  );
}
