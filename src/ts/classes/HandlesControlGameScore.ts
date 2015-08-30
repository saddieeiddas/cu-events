/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { ControlGameScore as ControlGameScoreAction } from '../actions/main';
export default class HandlesControlGameScore {
	name: string;
	action: any;
    constructor() {
        this.name = 'controlgame';
        this.action = ControlGameScoreAction;
    }
    start() : void {
        this.action.start();
    }
}
