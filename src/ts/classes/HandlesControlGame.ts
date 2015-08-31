/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { ControlGame as ControlGameAction } from '../actions/main';
export default class HandlesControlGame {
	name: string = 'controlgame';
	action: any = ControlGameAction;
    start() : void {
        this.action.start();
    }
}
