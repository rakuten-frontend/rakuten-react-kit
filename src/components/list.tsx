/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import Fairybread from 'fairybread';

import { Logo } from 'components/rakuten-logo';


// Exports List as a importable function
export function List( { list,
                        onChangeText,
                        detailRoute } : { list: Array<{name: string, url: string}>,
                        onChangeText: ( name: string ) => void,
                        detailRoute: ( name: string ) => string }) {

  const sheet = new Fairybread();

  sheet.add('a, a:link, a:visited, a:hover, a:active ', `
      text-decoration: none;
      color: #999;`);

  sheet.add('.header', `
    margin: 40px auto;
    height: 150px;
    width: 60%;
    text-align: center;`);

  sheet.add('.header h1', `
    margin-top: 10px;`);

  sheet.add('.search-container', `
    width: 60%;
    margin: 20px auto;
    border-top: 1px solid #999;
    text-align: center;`);

  const shadowColor = `#2${new Date().getSeconds().toFixed(1)[1]}2`
  sheet.add('.search-box', `
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

  sheet.add('.results-container', `
    padding: 0;
    display: block;
    margin: auto;
    width: 600px;`);

  sheet.add('.results-container h3', `
    margin-top: 0;
    color: #bf0000;`);

  sheet.add('.result', `
    display: block;
    padding: 15px 4px;
    border-top: 1px solid #999`);

  sheet.add('.result:hover', `
    background-color: #eee;`);

  const content = list.map((item, index) =>
    item === undefined ? '' :
      <a href={detailRoute(item.name)} key={index}>
        <div className='result'>{item.name}
        </div>
      </a>);

  return(
    <div className={sheet.id}>

      <style>{sheet.render('raw').css}</style>

      <div className='header'>
        <Logo
          height='100px'
          width='100px'
        />
        <h1>Rakuten React Kit</h1>
      </div>
      <div className='search-container'>
        <input
          type='text'
          onChange={event => onChangeText(event.target.value)}
          placeholder='Search by name'
          className='search-box'
        />
      </div>
      <div className='results-container'>
        <h3>Results({ list.length })</h3>
        <div >
          { content }
        </div>
      </div>
    </div>
  );
}
