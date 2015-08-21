/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../definitions/tsd.d.ts" />
var EventEmitter = require('eventemitter3');
var HandlesCharacter_1 = require('./classes/HandlesCharacter');
var Character_1 = require('./listeners/Character');
var EnemyTarget_1 = require('./listeners/EnemyTarget');
var FriendlyTarget_1 = require('./listeners/FriendlyTarget');
// Listeners
var listeners = {
    "character": new Character_1["default"](),
    "enemytarget": new EnemyTarget_1["default"](),
    "friendlytarget": new FriendlyTarget_1["default"]()
};
// Event emitter for grouped events
var Events = (function () {
    function Events() {
        // Handles objects
        this.Character = new HandlesCharacter_1["default"](),
            this.EnemyTarget = new HandlesCharacter_1["default"](),
            this.FriendlyTarget = new HandlesCharacter_1["default"]();
        // ...
        // Create an event emitter
        this.emitter = new EventEmitter();
    }
    // register for an event group
    Events.prototype.on = function (topic, callback) {
        var listener = listeners[topic];
        if (listener && !listener.listening) {
            listener.start(this.emitter);
        }
        this.emitter.on(topic, callback);
    };
    Events.prototype.off = function (topic, callback) {
        this.emitter.removeListener(topic, callback);
    };
    Events.prototype.addListener = function (topic, callback) {
        this.on(topic, callback);
    };
    Events.prototype.removeListener = function (topic, callback) {
        this.off(topic, callback);
    };
    return Events;
})();
exports.__esModule = true;
exports["default"] = Events;
