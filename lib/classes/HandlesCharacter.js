/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var main_1 = require('../actions/main');
var HandlesCharacter = (function () {
    function HandlesCharacter() {
        this.name = 'character';
        this.action = main_1.Character;
    }
    HandlesCharacter.prototype.start = function () {
        // FIXME: DOES NOT WORK!!!
        this.action.start();
    };
    return HandlesCharacter;
})();
exports.__esModule = true;
exports["default"] = HandlesCharacter;
