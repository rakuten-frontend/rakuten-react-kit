/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved. *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

import * as React from 'react';
import Fairybread from 'fairybread';
import { currentPage, filteredItems, detailItem, shadowColor, loading } from 'domain/store/selectors/main';
import List from 'components/presentational/list';
import Logo from 'components/presentational/rakuten_logo';
import Detail from 'components/presentational/detail';
import { detailRoute } from 'domain/middleware/router';
import { onChangeIncrementalSearch } from 'domain/middleware/user';

export function App() {

  const sheet = new Fairybread('global');
  sheet.ensure('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
  sheet.add('.row', `
    display: flex;
    align-items: center;
  `);

  const content = (pageName => {
    switch (pageName) { case 'HOME_PAGE':
        return <List
          list={filteredItems()}
          shadowColor={shadowColor()}
          onChangeText={onChangeIncrementalSearch}
          detailRoute={detailRoute} />;
      case 'DETAIL_PAGE':
        return <Detail detail={detailItem()} loading={loading()}/>;
      default:
        return <p>Page not found</p>;
    }
  })(currentPage().name);

  return (
    <div className={`${sheet.id} container`}>
      <style>{sheet.render('raw').css}</style>
      <div className='row'>

        <div className='col-sm-2'>
          <Logo height='100px' width='100px' />
        </div>

        <div className='col-sm-6'>
          <h1>Rakuten React Kit</h1>
        </div>

        {
          currentPage().name === 'DETAIL_PAGE' &&
          <div className='col-sm-2'>
            <a
              href='javascript:history.back()'
              type="button" className="btn btn-default">Back</a>
          </div>
        }

      </div>
      <div className='row'>
        <div className='col-sm-2' />
        <div className='col-sm-8'>
          { content }
        </div>
        <div className='col-sm-2' />
      </div>
    </div>
  );
}
