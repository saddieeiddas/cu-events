/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';

declare const cuAPI: any;

const EVENT_NAME = 'init';
let initialised = false;

function run(emitter : EventEmitter) {
	function notify() {
		emitter.emit(EVENT_NAME, {});
	}
	if (initialised) {
		notify();
	} else {
		cuAPI.OnInitialized(() => {
			initialised = true;
			notify();
		});
	}
}

export default class InitListener {
	once: boolean;
	constructor() {
		this.once = true;
	}
	start(emitter : EventEmitter) : void {
		// for the init listener, we always want to run it
		// because it may be called post-init, in which case
		// it needs to fire the handler immediately
		run(emitter);
	}
}
