var main_1 = require('../actions/main');
var HandlesEnemyTarget = (function () {
    function HandlesEnemyTarget() {
        this.name = "enemytarget";
        this.action = main_1.EnemyTarget;
    }
    HandlesEnemyTarget.prototype.start = function () {
        this.action.start();
    };
    return HandlesEnemyTarget;
})();
exports.__esModule = true;
exports["default"] = HandlesEnemyTarget;
