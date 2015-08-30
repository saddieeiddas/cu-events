/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var main_1 = require('../actions/main');
var HandlesAnnouncements = (function () {
    function HandlesAnnouncements() {
        this.name = 'announcements';
        this.action = main_1.Announcements;
    }
    HandlesAnnouncements.prototype.start = function () {
        // FIXME: DOES NOT WORK!!!
        this.action.start();
    };
    return HandlesAnnouncements;
})();
exports.__esModule = true;
exports["default"] = HandlesAnnouncements;
