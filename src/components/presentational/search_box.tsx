/* Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import Fairybread from 'fairybread';

export default function SearchBox({shadowColor, onChangeText}:
                  {shadowColor: string, onChangeText: (s: string) => void}) {

  const sheet = new Fairybread();

  sheet.add('div', `
    width: 60%;
    margin: 20px auto;
    border-top: 1px solid #999;
    text-align: center;`);

  sheet.add('input', `
    border: solid ${shadowColor} 2px;
    border-radius: 5px;
    box-shadow: 4px 4px 0 ${shadowColor};
    color: #222;
    cursor: pointer;
    display: inline-block;
    font: 600 14px/1 $font-family;
    margin: 30px 0.5rem 14px auto;
    padding: 6px 12px;
    text-align: left;`);

  sheet.add('.search-box:focus', 'outline: 0;');

  return(
    <div className={sheet.id}>
      <style>{sheet.render('raw').css}</style>
      <input
        type='text'
        onChange={event => onChangeText(event.target.value)}
        placeholder='Search by name'
      />
    </div>
  );

}
