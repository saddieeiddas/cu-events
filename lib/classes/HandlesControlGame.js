/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var main_1 = require('../actions/main');
var HandlesControlGame = (function () {
    function HandlesControlGame() {
        this.name = 'controlgame';
        this.action = main_1.ControlGame;
    }
    HandlesControlGame.prototype.start = function () {
        this.action.start();
    };
    return HandlesControlGame;
})();
exports.__esModule = true;
exports["default"] = HandlesControlGame;
