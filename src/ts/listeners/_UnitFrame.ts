/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import EventEmitter from '../classes/EventEmitter';
declare const cuAPI: any;

function run(emitter : EventEmitter, topic: string) {
	const info: any = {};

	// Event receivers
	function nameChanged(name : string) {
		info.name = name;
		emitter.emit(topic, info);
	}

	function raceChanged(race : number) {
		info.race = race;
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
	switch(topic) {
		case 'character':
			cuAPI.OnCharacterNameChanged(nameChanged);
			cuAPI.OnCharacterRaceChanged(raceChanged);
			cuAPI.OnCharacterHealthChanged(healthChanged);
			cuAPI.OnCharacterStaminaChanged(staminaChanged);
			break;
		case 'enemytarget':
			cuAPI.OnEnemyTargetNameChanged(nameChanged);
			cuAPI.OnEnemyTargetHealthChanged(healthChanged);
			cuAPI.OnEnemyTargetStaminaChanged(staminaChanged);
			break;
		case 'friendlytarget':
			cuAPI.OnFriendlyTargetNameChanged(nameChanged);
			cuAPI.OnFriendlyTargetHealthChanged(healthChanged);
			cuAPI.OnFriendlyTargetStaminaChanged(staminaChanged);
			break;
	}
}

export default class UnitFrameListener {
	listening: boolean = false;
	topic: string;
	constructor(handles: any) {
		this.topic = handles.name;
	}
	start(emitter : EventEmitter) : void {
		if (!this.listening) {
			this.listening = true;
			run(emitter, this.topic);
		}
	}
}
