var main_1 = require('../actions/main');
var HandlesFriendlyTarget = (function () {
    function HandlesFriendlyTarget() {
        this.name = "friendlytarget";
        this.action = main_1.FriendlyTarget;
    }
    HandlesFriendlyTarget.prototype.start = function () {
        this.action.start();
    };
    return HandlesFriendlyTarget;
})();
exports.__esModule = true;
exports["default"] = HandlesFriendlyTarget;
