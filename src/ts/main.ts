/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference path="../definitions/tsd.d.ts" />

import EventEmitter from './classes/EventEmitter';

import HandlesAnnouncements from './classes/HandlesAnnouncements';
import HandlesCharacter from './classes/HandlesCharacter';
import HandlesEnemyTarget from './classes/HandlesEnemyTarget';
import HandlesFriendlyTarget from './classes/HandlesFriendlyTarget';
import HandlesControlGame from './classes/HandlesControlGame';
import HandlesControlGameScore from './classes/HandlesControlGameScore';

import InitListener from './listeners/Init';
import AnnouncementsListener from './listeners/Announcements';
import CharacterListener from './listeners/Character';
import EnemyTargetListener from './listeners/EnemyTarget';
import FriendlyTargetListener from './listeners/FriendlyTarget';
import ControlGameListener from './listeners/ControlGame';
import ControlGameScoreListener from './listeners/ControlGameScore';

// Handle* objects.  These define both the event name, and the Reflux action used
// to trigger the stores (TODO: This latter part is not working)
const handlesAnnouncements : HandlesAnnouncements = new HandlesAnnouncements();
const handlesCharacter : HandlesCharacter = new HandlesCharacter();
const handlesEnemyTarget : HandlesEnemyTarget = new HandlesEnemyTarget();
const handlesFriendlyTarget : HandlesFriendlyTarget = new HandlesFriendlyTarget();
const handlesControlGame : HandlesControlGame = new HandlesControlGame();
const handlesControlGameScore : HandlesControlGameScore = new HandlesControlGameScore();

// Listeners
const listeners : any = {
    'init': new InitListener(),
    [handlesAnnouncements.topic]: new AnnouncementsListener(handlesAnnouncements),
    [handlesCharacter.topic]: new CharacterListener(handlesCharacter),
    [handlesEnemyTarget.topic]: new EnemyTargetListener(handlesEnemyTarget),
    [handlesFriendlyTarget.topic]: new FriendlyTargetListener(handlesFriendlyTarget),
    [handlesControlGame.topic]: new ControlGameListener(handlesControlGame),
    [handlesControlGameScore.topic]: new ControlGameScoreListener(handlesControlGameScore)
};

// Event Emitter.  A single instance of event emitter handles all cu-events events
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
    handlesAnnouncements,
    handlesCharacter,
    handlesEnemyTarget,
    handlesFriendlyTarget,
    handlesControlGame,
    handlesControlGameScore,
    on,
    off,
    addListener,
    removeListener
}