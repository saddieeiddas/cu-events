/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';
import REST from 'cu-restapi';
import HandlesControlGameScore from '../classes/HandlesControlGameScore';
declare const cuAPI: any;

const POLL_INTERVAL = 5000;
let timer : any;

function run(emitter: EventEmitter, topic: string) {
	let rest = new REST();
	let info: any = {};

	// Handle tick
	function tick() {
		let count = 2;

		// wait for both requests to finish before triggering
		// the event
		function done() {
			count--;
			if (count === 0) {
				emitter.emit(topic, info);
				info = {};
			}
		}

		// Get control game (score only)
		rest.controlGame({ includeControlPoints: false })
			.then((data:any) => {
				info.score = data;
				done();
			}, (status: string, errorThrown: string) => {
				info.error = { status: status, reason: errorThrown };
				done();
			});

		// and player counts
		rest.players()
			.then((data: any) => {
				info.players = data;
				done();
			}, (status: string, errorThrown: string) => {
				info.error = { status: status, reason: errorThrown };
				done();
			});
	}

	// if timer not running, start it
	if (!timer) {
		timer = setInterval(tick, POLL_INTERVAL);
	}
}

export default class ControlGameScoreListener {
	listening: boolean = false;
	topic: string;
	constructor(handles: HandlesControlGameScore) {
		this.topic = handles.name;
	}
	start(emitter : EventEmitter) : void {
		if (!this.listening) {
			this.listening = true;
			run(emitter, this.topic);
		}
	}
	stop() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
			this.listening = false;
		}
	}
}