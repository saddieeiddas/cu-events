/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../../definitions/tsd.d.ts" />
import * as Reflux from 'reflux';

// Create actions for each event group (and store from cu-core-stores)
const Character = Reflux.createActions(['start']);
const EnemyTarget = Reflux.createActions(['start']);
const FriendlyTarget = Reflux.createActions(['start']);
const Announcements = Reflux.createActions(['start']);

const ControlGame = Reflux.createActions(['start','stop']);
const ControlGameScore = Reflux.createActions(['start','stop']);

// Export
export {
	// cuAPI Events
    Character,
    EnemyTarget,
    FriendlyTarget,
    Announcements,

    // REST API
    ControlGame,
    ControlGameScore
}
