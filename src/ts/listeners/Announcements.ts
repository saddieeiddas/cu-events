/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';
declare const cuAPI: any;

const EVENT_NAME = 'announcement';

function run(emitter: EventEmitter) {
	cuAPI.OnAnnouncement((message: string, type: number) => {
		emitter.emit(EVENT_NAME, {
			message: message,
			type: type
		});
	});
}

export default class AnnouncementsListener {
	listening: boolean = false;
	type: string;
	start(emitter : EventEmitter) : void {
		if (!this.listening) {
			this.listening = true;
			run(emitter);
		}
	}
}
