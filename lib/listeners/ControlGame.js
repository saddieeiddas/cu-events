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
    function tick() {
        // TODO: switch to using cu-restapi
        rest.controlGame({ includeControlPoints: true }).then(function (data) {
            var instance = new _cuCore.ControlGame(data);
            emitter.emit(topic, instance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsicnVuIiwicnVuLnRpY2siLCJDb250cm9sR2FtZUxpc3RlbmVyIiwiQ29udHJvbEdhbWVMaXN0ZW5lci5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZUxpc3RlbmVyLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFNaUIsWUFBWTs7OztzQkFFRCxTQUFTOztBQUlyQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBSSxLQUFVLFlBQUEsQ0FBQztBQUVmLFNBQUEsR0FBQSxDQUFhLE9BQXFCLEVBQUUsS0FBYSxFQUFBO0FBQy9DQSxRQUFJQSxJQUFJQSxHQUFHQSw0QkFBVUEsQ0FBQ0E7QUFFdEJBLGFBQUFBLElBQUFBLEdBQUFBOztBQUVFQyxZQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxFQUFFQSxvQkFBb0JBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQWlCQSxFQUFBQTtBQUN0RUEsZ0JBQU1BLFFBQVFBLEdBQUdBLHdCQUFnQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLG1CQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtTQUMvQkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxtQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7U0FDeEVBLENBQUNBLENBQUNBO0tBQ0pBO0FBQ0RELFFBQUlBLENBQUNBLEtBQUtBLEVBQUVBO0FBQ1ZBLG1CQUFXQSxDQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtLQUNsQ0E7Q0FDRkE7O0lBRUQsbUJBQUE7QUFHRUUsYUFIRixtQkFBQSxDQUdjQSxPQUEyQkEsRUFBQUE7OEJBSHpDLG1CQUFBOztBQUNFQyxZQUFBQSxDQUFBQSxTQUFTQSxHQUFZQSxLQUFLQSxDQUFDQTtBQUd6QkEsWUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7S0FDNUJBOztpQkFMSCxtQkFBQTs7ZUFNT0QsZUFBQ0EsT0FBcUJBLEVBQUFBO0FBQ3pCRSxnQkFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUE7QUFDbkJBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUN0QkEsbUJBQUdBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2FBQzFCQTtTQUNGQTs7O2VBQ0dGLGdCQUFBQTtBQUNGRyxnQkFBSUEsS0FBS0EsRUFBRUE7QUFDVEEsNEJBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0FBQ3BCQSxxQkFBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDYkEsb0JBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2FBQ3hCQTtTQUNGQTs7O1dBbEJILG1CQUFBOzs7cUJBQUEsbUJBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0NvbnRyb2xHYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBSRVNUIGZyb20gJ2N1LXJlc3RhcGknO1xuaW1wb3J0IEhhbmRsZXNDb250cm9sR2FtZSBmcm9tICcuLi9jbGFzc2VzL0hhbmRsZXNDb250cm9sR2FtZSc7XG5pbXBvcnQgeyBDb250cm9sR2FtZSB9IGZyb20gJ2N1LWNvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IGN1QVBJOiBhbnk7XG5cbmNvbnN0IFBPTExfSU5URVJWQUwgPSA1MDAwO1xubGV0IHRpbWVyOiBhbnk7XG5cbmZ1bmN0aW9uIHJ1bihlbWl0dGVyOiBFdmVudEVtaXR0ZXIsIHRvcGljOiBzdHJpbmcpIHtcbiAgbGV0IHJlc3QgPSBuZXcgUkVTVCgpO1xuXG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgLy8gVE9ETzogc3dpdGNoIHRvIHVzaW5nIGN1LXJlc3RhcGlcbiAgICByZXN0LmNvbnRyb2xHYW1lKHsgaW5jbHVkZUNvbnRyb2xQb2ludHM6IHRydWUgfSkudGhlbigoZGF0YTogQ29udHJvbEdhbWUpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENvbnRyb2xHYW1lKGRhdGEpO1xuICAgICAgZW1pdHRlci5lbWl0KHRvcGljLCBpbnN0YW5jZSk7XG4gICAgfSwgKHN0YXR1czogc3RyaW5nLCBlcnJvclRocm93bjogc3RyaW5nKSA9PiB7XG4gICAgICBlbWl0dGVyLmVtaXQodG9waWMsIHsgZXJyb3I6IHsgc3RhdHVzOiBzdGF0dXMsIHJlYXNvbjogZXJyb3JUaHJvd24gfX0pO1xuICAgIH0pO1xuICB9XG4gIGlmICghdGltZXIpIHtcbiAgICBzZXRJbnRlcnZhbCh0aWNrLCBQT0xMX0lOVEVSVkFMKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sR2FtZUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNDb250cm9sR2FtZSkge1xuICAgIHRoaXMudG9waWMgPSBoYW5kbGVzLnRvcGljO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLnRvcGljKTtcbiAgICB9XG4gIH1cbiAgc3RvcCgpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
