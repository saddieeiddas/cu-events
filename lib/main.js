/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../definitions/tsd.d.ts" />
var EventEmitter_1 = require('./classes/EventEmitter');
var HandlesAnnouncements_1 = require('./classes/HandlesAnnouncements');
var HandlesCharacter_1 = require('./classes/HandlesCharacter');
var HandlesEnemyTarget_1 = require('./classes/HandlesEnemyTarget');
var HandlesFriendlyTarget_1 = require('./classes/HandlesFriendlyTarget');
var HandlesControlGame_1 = require('./classes/HandlesControlGame');
var HandlesControlGameScore_1 = require('./classes/HandlesControlGameScore');
var Init_1 = require('./listeners/Init');
var Announcements_1 = require('./listeners/Announcements');
var Character_1 = require('./listeners/Character');
var EnemyTarget_1 = require('./listeners/EnemyTarget');
var FriendlyTarget_1 = require('./listeners/FriendlyTarget');
var ControlGame_1 = require('./listeners/ControlGame');
var ControlGameScore_1 = require('./listeners/ControlGameScore');
// Listeners
var listeners = {
    'init': new Init_1["default"](),
    'announcements': new Announcements_1["default"](),
    'character': new Character_1["default"](),
    'enemytarget': new EnemyTarget_1["default"](),
    'friendlytarget': new FriendlyTarget_1["default"](),
    'controlgame': new ControlGame_1["default"](),
    'controlgame-score': new ControlGameScore_1["default"]()
};
// Handle* objects
var handlesAnnouncements = new HandlesAnnouncements_1["default"]();
var handlesCharacter = new HandlesCharacter_1["default"]();
var handlesEnemyTarget = new HandlesEnemyTarget_1["default"]();
var handlesFriendlyTarget = new HandlesFriendlyTarget_1["default"]();
var handlesControlGame = new HandlesControlGame_1["default"]();
var handlesControlGameScore = new HandlesControlGameScore_1["default"]();
// Event Emitter.  A single instance of event emitter handles all cu-events events
var emitter = new EventEmitter_1["default"]();
// register for an event group
function on(topic, callback) {
    var listener = listeners[topic];
    if (listener) {
        var handle = emitter.addListener(topic, listener.once, callback);
        // Start the listener.  The start() method will handle multiple
        // starts.  In some cases, the listener does need kickstarting
        // each time, in other cases, not.
        listener.start(emitter);
        return handle;
    }
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
    handlesAnnouncements: handlesAnnouncements,
    handlesCharacter: handlesCharacter,
    handlesEnemyTarget: handlesEnemyTarget,
    handlesFriendlyTarget: handlesFriendlyTarget,
    handlesControlGame: handlesControlGame,
    handlesControlGameScore: handlesControlGameScore,
    on: on,
    off: off,
    addListener: addListener,
    removeListener: removeListener
};
