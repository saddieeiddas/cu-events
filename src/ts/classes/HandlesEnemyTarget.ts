/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { EnemyTarget as EnemyTargetAction } from '../actions/main';
export default class HandlesEnemyTarget {
	name : string;
	action : any;
    constructor() {
        this.name = "enemytarget";
        this.action = EnemyTargetAction;
    }
    start() {
        this.action.start();
    }
}
