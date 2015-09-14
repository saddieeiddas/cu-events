/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function run(emitter, topic) {
    cuAPI.OnAnnouncement(function (message, type) {
        emitter.emit(topic, {
            message: message,
            type: type
        });
    });
}

var AnnouncementsListener = (function () {
    function AnnouncementsListener(handles) {
        _classCallCheck(this, AnnouncementsListener);

        this.listening = false;
        this.handles = handles;
    }

    _createClass(AnnouncementsListener, [{
        key: "start",
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.handles.topic);
            }
        }
    }]);

    return AnnouncementsListener;
})();

exports["default"] = AnnouncementsListener;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQW5ub3VuY2VtZW50cy50cyJdLCJuYW1lcyI6WyJydW4iLCJBbm5vdW5jZW1lbnRzTGlzdGVuZXIiLCJBbm5vdW5jZW1lbnRzTGlzdGVuZXIuY29uc3RydWN0b3IiLCJBbm5vdW5jZW1lbnRzTGlzdGVuZXIuc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxTQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFDQSxPQUFlQSxFQUFFQSxJQUFZQSxFQUFBQTtBQUNqREEsZUFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDbEJBLG1CQUFPQSxFQUFFQSxPQUFPQTtBQUNoQkEsZ0JBQUlBLEVBQUVBLElBQUlBO1NBQ1hBLENBQUNBLENBQUNBO0tBQ0pBLENBQUNBLENBQUNBO0NBQ0pBOztJQUVELHFCQUFBO0FBSUVDLGFBSkYscUJBQUEsQ0FJY0EsT0FBNkJBLEVBQUFBOzhCQUozQyxxQkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFJekJBLFlBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO0tBQ3hCQTs7aUJBTkgscUJBQUE7O2VBT09ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUNsQ0E7U0FDRkE7OztXQVpILHFCQUFBOzs7cUJBQUEscUJBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0Fubm91bmNlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgSGFuZGxlc0Fubm91bmNlbWVudHMgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzQW5ub3VuY2VtZW50cyc7XG5cbmRlY2xhcmUgY29uc3QgY3VBUEk6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBjdUFQSS5PbkFubm91bmNlbWVudCgobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBudW1iZXIpID0+IHtcbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbm5vdW5jZW1lbnRzTGlzdGVuZXIge1xuICBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdHlwZTogc3RyaW5nO1xuICBoYW5kbGVzOiBIYW5kbGVzQW5ub3VuY2VtZW50cztcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0Fubm91bmNlbWVudHMpIHtcbiAgICB0aGlzLmhhbmRsZXMgPSBoYW5kbGVzO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLmhhbmRsZXMudG9waWMpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
