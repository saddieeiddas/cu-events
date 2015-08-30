/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { FriendlyTarget as FriendlyTargetAction } from '../actions/main';
export default class HandlesFriendlyTarget {
	name: string;
	action: any;
    constructor() {
        this.name = 'friendlytarget';
        this.action = FriendlyTargetAction;
    }
    start() : void {
        // FIXME: DOES NOT WORK!!!
        this.action.start();
    }
}
