function run(emitter, type) {
    var info = {}, topic = type.toLowerCase();
    // Event receivers
    function nameChanged(name) {
        info.name = name;
        emitter.emit(topic, info);
    }
    function raceChanged(race) {
        info.race = race;
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
    switch (type) {
        case 'Character':
            cuAPI.OnCharacterNameChanged(nameChanged);
            cuAPI.OnCharacterRaceChanged(raceChanged);
            cuAPI.OnCharacterHealthChanged(healthChanged);
            cuAPI.OnCharacterStaminaChanged(staminaChanged);
            break;
        case 'EnemyTarget':
            cuAPI.OnEnemyTargetNameChanged(nameChanged);
            cuAPI.OnEnemyTargetHealthChanged(healthChanged);
            cuAPI.OnEnemyTargetStaminaChanged(staminaChanged);
            break;
        case 'FriendlyTarget':
            cuAPI.OnFriendlyTargetNameChanged(nameChanged);
            cuAPI.OnFriendlyTargetHealthChanged(healthChanged);
            cuAPI.OnFriendlyTargetStaminaChanged(staminaChanged);
            break;
    }
}
var UnitFrameListener = (function () {
    function UnitFrameListener(type) {
        this.listening = false;
        this.type = type;
    }
    UnitFrameListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.type);
        }
    };
    return UnitFrameListener;
})();
exports.__esModule = true;
exports["default"] = UnitFrameListener;
