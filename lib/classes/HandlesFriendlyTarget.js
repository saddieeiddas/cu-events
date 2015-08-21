/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var main_1 = require('../actions/main');
var HandlesFriendlyTarget = (function () {
    function HandlesFriendlyTarget() {
        this.name = 'friendlytarget';
        this.action = main_1.FriendlyTarget;
    }
    HandlesFriendlyTarget.prototype.start = function () {
        this.action.start();
    };
    return HandlesFriendlyTarget;
})();
exports.__esModule = true;
exports["default"] = HandlesFriendlyTarget;
