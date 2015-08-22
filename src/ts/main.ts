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

import InitListener from './listeners/Init';

import CharacterListener from './listeners/Character';
import EnemyTargetListener from './listeners/EnemyTarget';
import FriendlyTargetListener from './listeners/FriendlyTarget';

// Listeners
const listeners : any = {
    'init': new InitListener(),
    'character': new CharacterListener(),
    'enemytarget': new EnemyTargetListener(),
    'friendlytarget': new FriendlyTargetListener(),
};

// Handle* objects
const handlesCharacter : HandlesCharacter = new HandlesCharacter();
const handlesEnemyTarget : HandlesEnemyTarget = new HandlesEnemyTarget();
const handlesFriendlyTarget : HandlesFriendlyTarget = new HandlesFriendlyTarget();

// Event Emitter
const emitter : EventEmitter = new EventEmitter();

// register for an event group
function on(topic : string, callback : (info : any) => void) : any {
    const listener = listeners[topic];
    if (listener) {
        const handle = emitter.addListener(topic, listener.once, callback);
        // Start the listener.  The start() method will handle multiple
        // starts.  In some cases, the listener does need kickstarting
        // each time, in other cases, not.
        listener.start(emitter);
        return handle;
    }
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