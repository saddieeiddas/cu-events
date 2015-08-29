/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../../definitions/tsd.d.ts" />
var Reflux = require('reflux');
// Create actions for each event group (and store from cu-core-stores)
var Character = Reflux.createActions(['start']);
exports.Character = Character;
var EnemyTarget = Reflux.createActions(['start']);
exports.EnemyTarget = EnemyTarget;
var FriendlyTarget = Reflux.createActions(['start']);
exports.FriendlyTarget = FriendlyTarget;
var Announcements = Reflux.createActions(['start']);
exports.Announcements = Announcements;
// Export
