/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { ControlGame as ControlGameAction } from '../actions/main';
export default class HandlesControlGame {
	name: string;
	action: any;
    constructor() {
		console.log('HandlesControlGame:constructor()');
        this.name = 'controlgame';
        this.action = ControlGameAction;
    }
    start() : void {
		console.log('HandlesControlGame:start() call action.start()');
        // FIXME: DOES NOT WORK!!!
        this.action.start();
    }
}
