/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import SearchBox from 'components/presentational/search_box';

// Exports List as a importable function1Gkkkkkkk
export default function List( { list,
                        shadowColor,
                        onChangeText,
                        detailRoute } : { list: Array<{name: string, url: string}>,
                        shadowColor: string,
                        onChangeText: ( name: string ) => void,
                        detailRoute: ( name: string ) => string }) {

  const content = list.map((item, index) =>
    item === undefined ? '' :
      <tr key={index}>
        <td>
          <a href={detailRoute(item.name)} >
            <div className='result'>{item.name}</div>
          </a>
        </td>
      </tr>);

  return <div> 
      <SearchBox shadowColor={shadowColor} onChangeText={onChangeText} />
      <table className='table'>
        <thead>
          <tr>
            <th>Results({list.length})</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>;
}
