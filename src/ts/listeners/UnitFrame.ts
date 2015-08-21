/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter = require('eventemitter3');
import * as core from 'cu-core';
import { race as Race } from 'cu-core';

const cuAPI : core.clientInterface = core.cuAPI;

function run(emitter : EventEmitter) {
	var info : any = {},
		topic : string = this.type.toLosweCase();

	// Event receivers
	function nameChanged(name : string) {
		info.name = name;
		emitter.emit(topic, info);
	}

	function raceChanged(race : number) {
		info.raceId = race;
		debugger;
		emitter.emit(topic, info);
	}

	function healthChanged(health: number, maxHealth : number) {
		info.health = health;
		info.maxHealth = maxHealth;
		emitter.emit(topic, info);
	}

	function staminaChanged(stamina: number, maxStamina : number) {
		info.stamina = stamina;
		info.maxStamina = maxStamina;
		emitter.emit(topic, info);
	}

	// Hook up event receivers to the relevant cuAPI methods
	switch(this.type) {
		case "character":
			cuAPI.OnCharacterNameChanged(nameChanged);
			cuAPI.OnCharacterRaceChanged(raceChanged);
			cuAPI.OnCharacterHealthChanged(healthChanged);
			cuAPI.OnCharacterStaminaChanged(staminaChanged);
			break;
		case "enemytarget":
			cuAPI.OnEnemyTargetNameChanged(nameChanged);
			cuAPI.OnEnemyTargetHealthChanged(healthChanged);
			cuAPI.OnEnemyTargetStaminaChanged(staminaChanged);
			break;
		case "friendlytarget":
			cuAPI.OnFriendlyTargetNameChanged(nameChanged);
			cuAPI.OnFriendlyTargetHealthChanged(healthChanged);
			cuAPI.OnFriendlyTargetStaminaChanged(staminaChanged);
			break;
	}
}

export default class UnitFrameListener {
	listening: boolean = false
	constructor() {
		this.listening = false;
	}
	start(emitter : EventEmitter) {
		if (!this.listening) {
			run(emitter);
			this.listening = true;
		}
	}
}
