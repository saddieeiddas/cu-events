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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ29udHJvbEdhbWUudHMiXSwibmFtZXMiOlsicnVuIiwicnVuLnRpY2siLCJDb250cm9sR2FtZUxpc3RlbmVyIiwiQ29udHJvbEdhbWVMaXN0ZW5lci5jb25zdHJ1Y3RvciIsIkNvbnRyb2xHYW1lTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZUxpc3RlbmVyLnN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFNaUIsWUFBWTs7OztzQkFFRCxTQUFTOztBQUlyQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBSSxLQUFXLFlBQUEsQ0FBQztBQUVoQixTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUNoREEsUUFBSUEsSUFBSUEsR0FBR0EsNEJBQVVBLENBQUNBO0FBRXRCQSxhQUFBQSxJQUFBQSxHQUFBQTs7QUFFQ0MsWUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsb0JBQW9CQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFpQkEsRUFBQUE7QUFDdkVBLGdCQUFNQSxRQUFRQSxHQUFHQSx3QkFBZ0JBLElBQUlBLENBQUNBLENBQUNBO0FBQ3ZDQSxtQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7U0FDOUJBLEVBQUVBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQSxFQUFBQTtBQUN0Q0EsbUJBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEtBQUtBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLFdBQVdBLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO1NBQ3ZFQSxDQUFDQSxDQUFDQTtLQUNIQTtBQUNERCxRQUFJQSxDQUFDQSxLQUFLQSxFQUFFQTtBQUNYQSxtQkFBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7S0FDakNBO0NBQ0RBOztJQUVELG1CQUFBO0FBR0NFLGFBSEQsbUJBQUEsQ0FHYUEsT0FBMkJBLEVBQUFBOzhCQUh4QyxtQkFBQTs7QUFDQ0MsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFHMUJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0tBQzNCQTs7aUJBTEYsbUJBQUE7O2VBTU1ELGVBQUNBLE9BQXNCQSxFQUFBQTtBQUMzQkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ3BCQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUN6QkE7U0FDREE7OztlQUNHRixnQkFBQUE7QUFDSEcsZ0JBQUlBLEtBQUtBLEVBQUVBO0FBQ1ZBLDRCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNwQkEscUJBQUtBLEdBQUdBLElBQUlBLENBQUNBO0FBQ2JBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTthQUN2QkE7U0FDREE7OztXQWxCRixtQkFBQTs7O3FCQUFBLG1CQUFBIiwiZmlsZSI6InRzL2xpc3RlbmVycy9Db250cm9sR2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgUkVTVCBmcm9tICdjdS1yZXN0YXBpJztcbmltcG9ydCBIYW5kbGVzQ29udHJvbEdhbWUgZnJvbSAnLi4vY2xhc3Nlcy9IYW5kbGVzQ29udHJvbEdhbWUnO1xuaW1wb3J0IHsgQ29udHJvbEdhbWUgfSBmcm9tICdjdS1jb3JlJztcblxuZGVjbGFyZSBjb25zdCBjdUFQSTogYW55O1xuXG5jb25zdCBQT0xMX0lOVEVSVkFMID0gNTAwMDtcbmxldCB0aW1lciA6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuXHRsZXQgcmVzdCA9IG5ldyBSRVNUKCk7XG5cblx0ZnVuY3Rpb24gdGljaygpIHtcblx0XHQvLyBUT0RPOiBzd2l0Y2ggdG8gdXNpbmcgY3UtcmVzdGFwaVxuXHRcdHJlc3QuY29udHJvbEdhbWUoeyBpbmNsdWRlQ29udHJvbFBvaW50czogdHJ1ZSB9KS50aGVuKChkYXRhOiBDb250cm9sR2FtZSkgPT4ge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgQ29udHJvbEdhbWUoZGF0YSk7XG5cdFx0XHRlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcblx0XHR9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcblx0XHRcdGVtaXR0ZXIuZW1pdCh0b3BpYywgeyBlcnJvcjogeyBzdGF0dXM6IHN0YXR1cywgcmVhc29uOiBlcnJvclRocm93biB9fSk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKCF0aW1lcikge1xuXHRcdHNldEludGVydmFsKHRpY2ssIFBPTExfSU5URVJWQUwpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xHYW1lTGlzdGVuZXIge1xuXHRsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0dG9waWM6IHN0cmluZztcblx0Y29uc3RydWN0b3IoaGFuZGxlczogSGFuZGxlc0NvbnRyb2xHYW1lKSB7XG5cdFx0dGhpcy50b3BpYyA9IGhhbmRsZXMudG9waWM7XG5cdH1cblx0c3RhcnQoZW1pdHRlciA6IEV2ZW50RW1pdHRlcikgOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMubGlzdGVuaW5nKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmluZyA9IHRydWU7XG5cdFx0XHRydW4oZW1pdHRlciwgdGhpcy50b3BpYyk7XG5cdFx0fVxuXHR9XG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0dGltZXIgPSBudWxsO1xuXHRcdFx0dGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii4uLyJ9