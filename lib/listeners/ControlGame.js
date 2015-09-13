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
    function tick() {
        // TODO: switch to using cu-restapi
        rest.controlGame({ includeControlPoints: true }).then(function (data) {
            emitter.emit(topic, data);
        }, function (status, errorThrown) {
            emitter.emit(topic, { error: { status: status, reason: errorThrown } });
        });
    }
    if (!timer) {
        setInterval(tick, POLL_INTERVAL);
    }
}

var ControlGameListener = (function () {
    function ControlGameListener(handles) {
        _classCallCheck(this, ControlGameListener);

        this.listening = false;
        this.topic = handles.topic;
    }

    _createClass(ControlGameListener, [{
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

    return ControlGameListener;
})();

exports['default'] = ControlGameListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsicnVuIiwicnVuLnRpY2siLCJDb250cm9sR2FtZUxpc3RlbmVyIiwiQ29udHJvbEdhbWVMaXN0ZW5lci5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZUxpc3RlbmVyLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQU9pQixZQUFZOzs7O0FBSzdCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFJLEtBQVUsWUFBQSxDQUFDO0FBRWYsU0FBQSxHQUFBLENBQWEsT0FBcUIsRUFBRSxLQUFhLEVBQUE7QUFDL0NBLFFBQUlBLElBQUlBLEdBQUdBLDRCQUFVQSxDQUFDQTtBQUN0QkEsYUFBQUEsSUFBQUEsR0FBQUE7O0FBRUVDLFlBQUlBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLG9CQUFvQkEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBU0EsRUFBQUE7QUFDOURBLG1CQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtTQUMzQkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxtQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7U0FDekVBLENBQUNBLENBQUNBO0tBQ0pBO0FBQ0RELFFBQUlBLENBQUNBLEtBQUtBLEVBQUVBO0FBQ1ZBLG1CQUFXQSxDQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtLQUNsQ0E7Q0FDRkE7O0lBRUQsbUJBQUE7QUFHRUUsYUFIRixtQkFBQSxDQUdjQSxPQUEyQkEsRUFBQUE7OEJBSHpDLG1CQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUd6QkEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7S0FDNUJBOztpQkFMSCxtQkFBQTs7ZUFNT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQzFCQTtTQUNGQTs7O2VBQ0dGLGdCQUFBQTtBQUNGRyxnQkFBSUEsS0FBS0EsRUFBRUE7QUFDVEEsNEJBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0FBQ3BCQSxxQkFBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDYkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2FBQ3hCQTtTQUNGQTs7O1dBbEJILG1CQUFBOzs7cUJBQUEsbUJBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0NvbnRyb2xHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IFJFU1QgZnJvbSAnY3UtcmVzdGFwaSc7XG5pbXBvcnQgSGFuZGxlc0NvbnRyb2xHYW1lIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbnRyb2xHYW1lJztcblxuZGVjbGFyZSBjb25zdCBjdUFQSTogYW55O1xuXG5jb25zdCBQT0xMX0lOVEVSVkFMID0gNTAwMDtcbmxldCB0aW1lcjogYW55O1xuXG5mdW5jdGlvbiBydW4oZW1pdHRlcjogRXZlbnRFbWl0dGVyLCB0b3BpYzogc3RyaW5nKSB7XG4gIGxldCByZXN0ID0gbmV3IFJFU1QoKTtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAvLyBUT0RPOiBzd2l0Y2ggdG8gdXNpbmcgY3UtcmVzdGFwaVxuICAgIHJlc3QuY29udHJvbEdhbWUoeyBpbmNsdWRlQ29udHJvbFBvaW50czogdHJ1ZSB9KS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgZGF0YSk7XG4gICAgfSwgKHN0YXR1czogc3RyaW5nLCBlcnJvclRocm93bjogc3RyaW5nKSA9PiB7XG4gICAgICBlbWl0dGVyLmVtaXQodG9waWMsIHsgZXJyb3I6IHsgc3RhdHVzOiBzdGF0dXMsIHJlYXNvbjogZXJyb3JUaHJvd24gfSB9KTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXRpbWVyKSB7XG4gICAgc2V0SW50ZXJ2YWwodGljaywgUE9MTF9JTlRFUlZBTCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbEdhbWVMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0b3BpYzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ29udHJvbEdhbWUpIHtcbiAgICB0aGlzLnRvcGljID0gaGFuZGxlcy50b3BpYztcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IHRydWU7XG4gICAgICBydW4oZW1pdHRlciwgdGhpcy50b3BpYyk7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=