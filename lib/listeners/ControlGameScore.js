/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cuRestapi = require('cu-restapi');

var _cuRestapi2 = _interopRequireDefault(_cuRestapi);

var POLL_INTERVAL = 5000;
var timer = undefined;
function run(emitter, topic) {
    var rest = new _cuRestapi2['default']();
    var info = {};
    // Handle tick
    function tick() {
        var count = 2;
        // wait for both requests to finish before triggering
        // the event
        function done() {
            count--;
            if (count === 0) {
                emitter.emit(topic, info);
                info = {};
            }
        }
        // Get control game (score only)
        rest.controlGame({ includeControlPoints: false }).then(function (data) {
            info.score = data;
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
        // and player counts
        rest.players().then(function (data) {
            info.players = data;
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
    }
    // if timer not running, start it
    if (!timer) {
        timer = setInterval(tick, POLL_INTERVAL);
    }
}

var ControlGameScoreListener = (function () {
    function ControlGameScoreListener(handles) {
        _classCallCheck(this, ControlGameScoreListener);

        this.listening = false;
        this.topic = handles.topic;
    }

    _createClass(ControlGameScoreListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.topic);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (timer) {
                clearTimeout(timer);
                timer = null;
                this.listening = false;
            }
        }
    }]);

    return ControlGameScoreListener;
})();

exports['default'] = ControlGameScoreListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4udGljayIsInJ1bi50aWNrLmRvbmUiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBT2lCLFlBQVk7Ozs7QUFLN0IsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBQUksS0FBVSxZQUFBLENBQUM7QUFFZixTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsUUFBSUEsSUFBSUEsR0FBR0EsNEJBQVVBLENBQUNBO0FBQ3RCQSxRQUFJQSxJQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTs7QUFHbkJBLGFBQUFBLElBQUFBLEdBQUFBO0FBQ0VDLFlBQUlBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBOzs7QUFJZEEsaUJBQUFBLElBQUFBLEdBQUFBO0FBQ0VDLGlCQUFLQSxFQUFFQSxDQUFDQTtBQUNSQSxnQkFBSUEsS0FBS0EsS0FBS0EsQ0FBQ0EsRUFBRUE7QUFDZkEsdUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0FBQzFCQSxvQkFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7YUFDWEE7U0FDRkE7O0FBR0RELFlBQUlBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLG9CQUFvQkEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FDOUNBLElBQUlBLENBQUNBLFVBQUNBLElBQVNBLEVBQUFBO0FBQ2RBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNsQkEsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1JBLEVBQUVBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQSxFQUFBQTtBQUNyQ0EsZ0JBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLFdBQVdBLEVBQUVBLENBQUNBO0FBQ3JEQSxnQkFBSUEsRUFBRUEsQ0FBQ0E7U0FDUkEsQ0FBQ0EsQ0FBQ0E7O0FBR0xBLFlBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQ1hBLElBQUlBLENBQUNBLFVBQUNBLElBQVNBLEVBQUFBO0FBQ2RBLGdCQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNwQkEsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1JBLEVBQUVBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQSxFQUFBQTtBQUNyQ0EsZ0JBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLFdBQVdBLEVBQUVBLENBQUNBO0FBQ3JEQSxnQkFBSUEsRUFBRUEsQ0FBQ0E7U0FDUkEsQ0FBQ0EsQ0FBQ0E7S0FDTkE7O0FBR0RELFFBQUlBLENBQUNBLEtBQUtBLEVBQUVBO0FBQ1ZBLGFBQUtBLEdBQUdBLFdBQVdBLENBQUNBLElBQUlBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO0tBQzFDQTtDQUNGQTs7SUFFRCx3QkFBQTtBQUdFRyxhQUhGLHdCQUFBLENBR2NBLE9BQWdDQSxFQUFBQTs4QkFIOUMsd0JBQUE7O0FBQ0VDLFlBQUFBLENBQUFBLFNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO0FBR3pCQSxZQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtLQUM1QkE7O2lCQUxILHdCQUFBOztlQU1PRCxlQUFDQSxPQUFxQkEsRUFBQUE7QUFDekJFLGdCQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQTtBQUNuQkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBO0FBQ3RCQSxtQkFBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7YUFDMUJBO1NBQ0ZBOzs7ZUFDR0YsZ0JBQUFBO0FBQ0ZHLGdCQUFJQSxLQUFLQSxFQUFFQTtBQUNUQSw0QkFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDcEJBLHFCQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNiQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7YUFDeEJBO1NBQ0ZBOzs7V0FsQkgsd0JBQUE7OztxQkFBQSx3QkFBQSIsImZpbGUiOiJ0cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBSRVNUIGZyb20gJ2N1LXJlc3RhcGknO1xuaW1wb3J0IEhhbmRsZXNDb250cm9sR2FtZVNjb3JlIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IGN1QVBJOiBhbnk7XG5cbmNvbnN0IFBPTExfSU5URVJWQUwgPSA1MDAwO1xubGV0IHRpbWVyOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgbGV0IHJlc3QgPSBuZXcgUkVTVCgpO1xuICBsZXQgaW5mbzogYW55ID0ge307XG5cbiAgLy8gSGFuZGxlIHRpY2tcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBsZXQgY291bnQgPSAyO1xuXG4gICAgLy8gd2FpdCBmb3IgYm90aCByZXF1ZXN0cyB0byBmaW5pc2ggYmVmb3JlIHRyaWdnZXJpbmdcbiAgICAvLyB0aGUgZXZlbnRcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgY291bnQtLTtcbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluZm8pO1xuICAgICAgICBpbmZvID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvbnRyb2wgZ2FtZSAoc2NvcmUgb25seSlcbiAgICByZXN0LmNvbnRyb2xHYW1lKHsgaW5jbHVkZUNvbnRyb2xQb2ludHM6IGZhbHNlIH0pXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGluZm8uc2NvcmUgPSBkYXRhO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaW5mby5lcnJvciA9IHsgc3RhdHVzOiBzdGF0dXMsIHJlYXNvbjogZXJyb3JUaHJvd24gfTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG5cbiAgICAvLyBhbmQgcGxheWVyIGNvdW50c1xuICAgIHJlc3QucGxheWVycygpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGluZm8ucGxheWVycyA9IGRhdGE7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIChzdGF0dXM6IHN0cmluZywgZXJyb3JUaHJvd246IHN0cmluZykgPT4ge1xuICAgICAgICBpbmZvLmVycm9yID0geyBzdGF0dXM6IHN0YXR1cywgcmVhc29uOiBlcnJvclRocm93biB9O1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIHRpbWVyIG5vdCBydW5uaW5nLCBzdGFydCBpdFxuICBpZiAoIXRpbWVyKSB7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCh0aWNrLCBQT0xMX0lOVEVSVkFMKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIge1xuICBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9waWM6IHN0cmluZztcbiAgY29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUpIHtcbiAgICB0aGlzLnRvcGljID0gaGFuZGxlcy50b3BpYztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy50b3BpYyk7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=