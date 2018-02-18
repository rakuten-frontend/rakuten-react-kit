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

import * as React from 'react';
import { DetailItem } from 'domain/store/main';
import Fairybread from 'fairybread';

// Exports List as a importable function
export default function Detail( { detail, loading } :
                        { detail: DetailItem, loading: boolean }) {

  const sheet = new Fairybread();
  sheet.add('i', 'font-size:50px');
  sheet.add('td', 'width: 150px');

  return <div className={`${sheet.id} row`}>
    <style>{sheet.render('raw').css}</style>
    <div className="column-sm-10">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {
            loading?
              <tr>
                <td>Now loading ...</td>
                <td></td>
                <td></td>
              </tr>:
              <tr>
                <td>{detail.name}</td>
                <td>{detail.height}</td>
                <td>{detail.weight}</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
    <div className="column-sm-2">
      {
        !loading  &&
          <img src={ detail.sprites.frontDefault } alt={detail.name} />   
      }
    </div>
 </div>;
}
