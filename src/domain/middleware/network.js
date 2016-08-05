/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/domain/middleware/network.js
 *
 * This file represents the 'network actor' in your application. It means that
 * this file should contain handlers needed to dispach all actions related to
 * network activities, including but not limited to API calls.
 */

// @flow

import axios from "axios";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import type { User } from "domain/store/state/main";
import { updateUsersAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/network");

// Make getUsers a importable function
export function getUsers() {
  // Make the network call via ajax using axios
  return axios.get("http://reqres.in/api/users?page=2")
      // Whenever it is ready, it will resolve the event and set its result
       .then(response => {
         return response.data.data.map( (datum) => {
           return {
             firstName: datum.first_name,
             lastName: datum.last_name
           };
         });
       })
       // Or it will throw an error
      .catch( err => {
        console.error(err);
      });
}

// Make onUsersFromNetwork a importable function
export function onUsersFromNetwork(users : Array<User>) {
  logger.debug("Users from network");
  // Dispatch an action ...
  store.dispatch(updateUsersAction(users));
}

/*
 * EOF: src/domain/middleware/network.js
 */
