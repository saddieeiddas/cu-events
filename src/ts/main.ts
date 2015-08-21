/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../definitions/tsd.d.ts" />

import EventEmitter from './classes/EventEmitter';

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


// Handle* objects
let handlesCharacter : HandlesCharacter = new HandlesCharacter();
let handlesEnemyTarget : HandlesEnemyTarget = new HandlesEnemyTarget();
let handlesFriendlyTarget : HandlesFriendlyTarget = new HandlesFriendlyTarget();

// Event Emitter
let emitter : EventEmitter = new EventEmitter();

// register for an event group
function on(topic : string, callback : (info : any) => void) : any {
    var listener = listeners[topic];
    if (listener && !listener.listening) {
        listener.start(emitter);
    }
    return emitter.addListener(topic, callback);
}

function off(listener: any) : void {
    emitter.removeListener(listener);
}

function addListener(topic : string, callback : (info : any) => void) : void {
    on(topic, callback);
}

function removeListener(listener: any) : void {
    off(listener);
}

export default {
    handlesCharacter,
    handlesEnemyTarget,
    handlesFriendlyTarget,
    on,
    off,
    addListener,
    removeListener
}