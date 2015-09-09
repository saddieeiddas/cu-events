var cu_core_1 = require('cu-core');
function run(emitter, topic) {
    var info = {};
    var instance;
    // Event receivers
    function nameChanged(name) {
        instance.setName(name);
        emitter.emit(topic, instance);
    }
    function raceChanged(race) {
        instance.setRace(race);
        emitter.emit(topic, instance);
    }
    function healthChanged(health, maxHealth) {
        instance.setHealth(health, maxHealth);
        emitter.emit(topic, instance);
    }
    function staminaChanged(stamina, maxStamina) {
        instance.setStamina(stamina, maxStamina);
        emitter.emit(topic, instance);
    }
    // Hook up event receivers to the relevant cuAPI methods
    switch (topic) {
        case 'character':
            instance = new cu_core_1.Player({});
            cuAPI.OnCharacterNameChanged(nameChanged);
            cuAPI.OnCharacterRaceChanged(raceChanged);
            cuAPI.OnCharacterHealthChanged(healthChanged);
            cuAPI.OnCharacterStaminaChanged(staminaChanged);
            break;
        case 'enemytarget':
            instance = new cu_core_1.Combatant({});
            cuAPI.OnEnemyTargetNameChanged(nameChanged);
            cuAPI.OnEnemyTargetHealthChanged(healthChanged);
            cuAPI.OnEnemyTargetStaminaChanged(staminaChanged);
            break;
        case 'friendlytarget':
            instance = new cu_core_1.Combatant({});
            cuAPI.OnFriendlyTargetNameChanged(nameChanged);
            cuAPI.OnFriendlyTargetHealthChanged(healthChanged);
            cuAPI.OnFriendlyTargetStaminaChanged(staminaChanged);
            break;
    }
}
var UnitFrameListener = (function () {
    function UnitFrameListener(handles) {
        this.listening = false;
        this.topic = handles.name;
    }
    UnitFrameListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return UnitFrameListener;
})();
exports.__esModule = true;
exports["default"] = UnitFrameListener;
