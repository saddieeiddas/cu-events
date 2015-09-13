'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cuRestapi = require('cu-restapi');

var _cuRestapi2 = _interopRequireDefault(_cuRestapi);

var _cuCore = require('cu-core');

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
            info.score = new _cuCore.ControlGame(data);
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
        // and player counts
        rest.players().then(function (data) {
            info.players = new _cuCore.Population(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4udGljayIsInJ1bi50aWNrLmRvbmUiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQU1pQixZQUFZOzs7O3NCQUVXLFNBQVM7O0FBR2pELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFJLEtBQVcsWUFBQSxDQUFDO0FBRWhCLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQ2hEQSxRQUFJQSxJQUFJQSxHQUFHQSw0QkFBVUEsQ0FBQ0E7QUFDdEJBLFFBQUlBLElBQUlBLEdBQVFBLEVBQUVBLENBQUNBOztBQUduQkEsYUFBQUEsSUFBQUEsR0FBQUE7QUFDQ0MsWUFBSUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7OztBQUlkQSxpQkFBQUEsSUFBQUEsR0FBQUE7QUFDQ0MsaUJBQUtBLEVBQUVBLENBQUNBO0FBQ1JBLGdCQUFJQSxLQUFLQSxLQUFLQSxDQUFDQSxFQUFFQTtBQUNoQkEsdUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0FBQzFCQSxvQkFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7YUFDVkE7U0FDREE7O0FBR0RELFlBQUlBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLG9CQUFvQkEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FDL0NBLElBQUlBLENBQUNBLFVBQUNBLElBQWlCQSxFQUFBQTtBQUN2QkEsZ0JBQUlBLENBQUNBLEtBQUtBLEdBQUdBLHdCQUFnQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDbkNBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNQQSxFQUFFQSxVQUFDQSxNQUFjQSxFQUFFQSxXQUFtQkEsRUFBQUE7QUFDdENBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxXQUFXQSxFQUFFQSxDQUFDQTtBQUNyREEsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1BBLENBQUNBLENBQUNBOztBQUdKQSxZQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUNaQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFnQkEsRUFBQUE7QUFDdEJBLGdCQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSx1QkFBZUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDcENBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNQQSxFQUFFQSxVQUFDQSxNQUFjQSxFQUFFQSxXQUFtQkEsRUFBQUE7QUFDdENBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxXQUFXQSxFQUFFQSxDQUFDQTtBQUNyREEsZ0JBQUlBLEVBQUVBLENBQUNBO1NBQ1BBLENBQUNBLENBQUNBO0tBQ0pBOztBQUdERCxRQUFJQSxDQUFDQSxLQUFLQSxFQUFFQTtBQUNYQSxhQUFLQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtLQUN6Q0E7Q0FDREE7O0lBRUQsd0JBQUE7QUFHQ0csYUFIRCx3QkFBQSxDQUdhQSxPQUFnQ0EsRUFBQUE7OEJBSDdDLHdCQUFBOztBQUNDQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUcxQkEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7S0FDM0JBOztpQkFMRix3QkFBQTs7ZUFNTUQsZUFBQ0EsT0FBc0JBLEVBQUFBO0FBQzNCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDcEJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQ3pCQTtTQUNEQTs7O2VBQ0dGLGdCQUFBQTtBQUNIRyxnQkFBSUEsS0FBS0EsRUFBRUE7QUFDVkEsNEJBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0FBQ3BCQSxxQkFBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDYkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2FBQ3ZCQTtTQUNEQTs7O1dBbEJGLHdCQUFBOzs7cUJBQUEsd0JBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0NvbnRyb2xHYW1lU2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IFJFU1QgZnJvbSAnY3UtcmVzdGFwaSc7XG5pbXBvcnQgSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzQ29udHJvbEdhbWVTY29yZSc7XG5pbXBvcnQgeyBDb250cm9sR2FtZSwgUG9wdWxhdGlvbiB9IGZyb20gJ2N1LWNvcmUnO1xuZGVjbGFyZSBjb25zdCBjdUFQSTogYW55O1xuXG5jb25zdCBQT0xMX0lOVEVSVkFMID0gNTAwMDtcbmxldCB0aW1lciA6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuXHRsZXQgcmVzdCA9IG5ldyBSRVNUKCk7XG5cdGxldCBpbmZvOiBhbnkgPSB7fTtcblxuXHQvLyBIYW5kbGUgdGlja1xuXHRmdW5jdGlvbiB0aWNrKCkge1xuXHRcdGxldCBjb3VudCA9IDI7XG5cblx0XHQvLyB3YWl0IGZvciBib3RoIHJlcXVlc3RzIHRvIGZpbmlzaCBiZWZvcmUgdHJpZ2dlcmluZ1xuXHRcdC8vIHRoZSBldmVudFxuXHRcdGZ1bmN0aW9uIGRvbmUoKSB7XG5cdFx0XHRjb3VudC0tO1xuXHRcdFx0aWYgKGNvdW50ID09PSAwKSB7XG5cdFx0XHRcdGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5mbyk7XG5cdFx0XHRcdGluZm8gPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBHZXQgY29udHJvbCBnYW1lIChzY29yZSBvbmx5KVxuXHRcdHJlc3QuY29udHJvbEdhbWUoeyBpbmNsdWRlQ29udHJvbFBvaW50czogZmFsc2UgfSlcblx0XHRcdC50aGVuKChkYXRhOiBDb250cm9sR2FtZSkgPT4ge1xuXHRcdFx0XHRpbmZvLnNjb3JlID0gbmV3IENvbnRyb2xHYW1lKGRhdGEpO1xuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aW5mby5lcnJvciA9IHsgc3RhdHVzOiBzdGF0dXMsIHJlYXNvbjogZXJyb3JUaHJvd24gfTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSk7XG5cblx0XHQvLyBhbmQgcGxheWVyIGNvdW50c1xuXHRcdHJlc3QucGxheWVycygpXG5cdFx0XHQudGhlbigoZGF0YTogUG9wdWxhdGlvbikgPT4ge1xuXHRcdFx0XHRpbmZvLnBsYXllcnMgPSBuZXcgUG9wdWxhdGlvbihkYXRhKTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSwgKHN0YXR1czogc3RyaW5nLCBlcnJvclRocm93bjogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGluZm8uZXJyb3IgPSB7IHN0YXR1czogc3RhdHVzLCByZWFzb246IGVycm9yVGhyb3duIH07XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Ly8gaWYgdGltZXIgbm90IHJ1bm5pbmcsIHN0YXJ0IGl0XG5cdGlmICghdGltZXIpIHtcblx0XHR0aW1lciA9IHNldEludGVydmFsKHRpY2ssIFBPTExfSU5URVJWQUwpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xHYW1lU2NvcmVMaXN0ZW5lciB7XG5cdGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHR0b3BpYzogc3RyaW5nO1xuXHRjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ29udHJvbEdhbWVTY29yZSkge1xuXHRcdHRoaXMudG9waWMgPSBoYW5kbGVzLnRvcGljO1xuXHR9XG5cdHN0YXJ0KGVtaXR0ZXIgOiBFdmVudEVtaXR0ZXIpIDogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmxpc3RlbmluZykge1xuXHRcdFx0dGhpcy5saXN0ZW5pbmcgPSB0cnVlO1xuXHRcdFx0cnVuKGVtaXR0ZXIsIHRoaXMudG9waWMpO1xuXHRcdH1cblx0fVxuXHRzdG9wKCkge1xuXHRcdGlmICh0aW1lcikge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdHRpbWVyID0gbnVsbDtcblx0XHRcdHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIuLi8ifQ==