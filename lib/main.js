/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../definitions/tsd.d.ts" />
var EventEmitter_1 = require('./classes/EventEmitter');
var HandlesCharacter_1 = require('./classes/HandlesCharacter');
var HandlesEnemyTarget_1 = require('./classes/HandlesEnemyTarget');
var HandlesFriendlyTarget_1 = require('./classes/HandlesFriendlyTarget');
var Character_1 = require('./listeners/Character');
var EnemyTarget_1 = require('./listeners/EnemyTarget');
var FriendlyTarget_1 = require('./listeners/FriendlyTarget');
// Listeners
var listeners = {
    'character': new Character_1["default"](),
    'enemytarget': new EnemyTarget_1["default"](),
    'friendlytarget': new FriendlyTarget_1["default"]()
};
// Handle* objects
var handlesCharacter = new HandlesCharacter_1["default"]();
var handlesEnemyTarget = new HandlesEnemyTarget_1["default"]();
var handlesFriendlyTarget = new HandlesFriendlyTarget_1["default"]();
// Event Emitter
var emitter = new EventEmitter_1["default"]();
// register for an event group
function on(topic, callback) {
    var listener = listeners[topic];
    if (listener && !listener.listening) {
        listener.start(emitter);
    }
    return emitter.addListener(topic, callback);
}
function off(listener) {
    emitter.removeListener(listener);
}
function addListener(topic, callback) {
    on(topic, callback);
}
function removeListener(listener) {
    off(listener);
}
exports.__esModule = true;
exports["default"] = {
    handlesCharacter: handlesCharacter,
    handlesEnemyTarget: handlesEnemyTarget,
    handlesFriendlyTarget: handlesFriendlyTarget,
    on: on,
    off: off,
    addListener: addListener,
    removeListener: removeListener
};
