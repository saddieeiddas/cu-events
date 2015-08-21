var main_1 = require('../actions/main');
var HandlesCharacter = (function () {
    function HandlesCharacter() {
        this.name = "character";
        this.action = main_1.Character;
    }
    HandlesCharacter.prototype.start = function () {
        this.action.start();
    };
    return HandlesCharacter;
})();
exports.__esModule = true;
exports["default"] = HandlesCharacter;
