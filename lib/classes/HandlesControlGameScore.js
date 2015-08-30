/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var main_1 = require('../actions/main');
var HandlesControlGameScore = (function () {
    function HandlesControlGameScore() {
        this.name = 'controlgame-score';
        this.action = main_1.ControlGameScore;
    }
    HandlesControlGameScore.prototype.start = function () {
        this.action.start();
    };
    return HandlesControlGameScore;
})();
exports.__esModule = true;
exports["default"] = HandlesControlGameScore;
