/*
 * -------------------------------
 * 2016 Rakuten Inc.
 * Author: adan.munoz@rakuten.com
 * -------------------------------
 */

// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";
import { map } from "lodash";

export function Users( { users } :
                       { users: Array<{firstName: string, lastName: string}> }) {

  const content = map(users, (user, index) =>
    <li key={index}>
      {`First name: ${user.firstName}, last name: ${user.lastName}`}
    </li>);

  return(
    <div>
      <p>List of users</p>
      <ul>
        { content }
      </ul>
    </div>
  );
}
