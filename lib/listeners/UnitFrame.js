var core = require('cu-core');
var cuAPI = core.cuAPI;
function run(emitter) {
    var info = {}, topic = this.type.toLosweCase();
    // Event receivers
    function nameChanged(name) {
        info.name = name;
        emitter.emit(topic, info);
    }
    function raceChanged(race) {
        info.raceId = race;
        debugger;
        emitter.emit(topic, info);
    }
    function healthChanged(health, maxHealth) {
        info.health = health;
        info.maxHealth = maxHealth;
        emitter.emit(topic, info);
    }
    function staminaChanged(stamina, maxStamina) {
        info.stamina = stamina;
        info.maxStamina = maxStamina;
        emitter.emit(topic, info);
    }
    // Hook up event receivers to the relevant cuAPI methods
    switch (this.type) {
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
var UnitFrameListener = (function () {
    function UnitFrameListener() {
        this.listening = false;
        this.listening = false;
    }
    UnitFrameListener.prototype.start = function (emitter) {
        if (!this.listening) {
            run(emitter);
            this.listening = true;
        }
    };
    return UnitFrameListener;
})();
exports.__esModule = true;
exports["default"] = UnitFrameListener;
