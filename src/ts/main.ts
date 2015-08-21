/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../definitions/tsd.d.ts" />

import EventEmitter = require('eventemitter3');

import HandlesCharacter from './classes/HandlesCharacter';
import HandlesEnemyTarget from './classes/HandlesEnemyTarget';
import HandlesFriendlyTarget from './classes/HandlesFriendlyTarget';

import CharacterListener from './listeners/Character';
import EnemyTargetListener from './listeners/EnemyTarget';
import FriendlyTargetListener from './listeners/FriendlyTarget';

// Listeners
const listeners : any = {
    "character": new CharacterListener(),
    "enemytarget": new EnemyTargetListener(),
    "friendlytarget": new FriendlyTargetListener(),
};

// Event emitter for grouped events
export default class Events {

    // Handle* objects
    Character : HandlesCharacter;
    EnemyTarget : HandlesEnemyTarget;
    FriendlyTarget : HandlesFriendlyTarget;

    // Event Emitter
    emitter : EventEmitter;

    constructor() {
        // Handles objects
        this.Character = new HandlesCharacter(),
        this.EnemyTarget = new HandlesCharacter(),
        this.FriendlyTarget = new HandlesCharacter()
        // ...

        // Create an event emitter
        this.emitter = new EventEmitter();
    }

    // register for an event group
    on(topic : string, callback : (info : any) => void) {
        var listener = listeners[topic];
        if (listener && !listener.listening) {
            listener.start(this.emitter);
        }
        this.emitter.on(topic, callback);
    }

    off(topic : string, callback : (info : any) => void) {
        this.emitter.removeListener(topic, callback);
    }

    addListener(topic : string, callback : (info : any) => void) {
        this.on(topic, callback);
    }

    removeListener(topic : string, callback : (info : any) => void) {
        this.off(topic, callback);
    }
}
