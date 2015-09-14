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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4udGljayIsInJ1bi50aWNrLmRvbmUiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuY29uc3RydWN0b3IiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RhcnQiLCJDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIuc3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQU1pQixZQUFZOzs7O3NCQUVXLFNBQVM7O0FBR2pELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFJLEtBQVUsWUFBQSxDQUFDO0FBRWYsU0FBQSxHQUFBLENBQWEsT0FBcUIsRUFBRSxLQUFhLEVBQUE7QUFDL0NBLFFBQUlBLElBQUlBLEdBQUdBLDRCQUFVQSxDQUFDQTtBQUN0QkEsUUFBSUEsSUFBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7O0FBR25CQSxhQUFBQSxJQUFBQSxHQUFBQTtBQUNFQyxZQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTs7O0FBSWRBLGlCQUFBQSxJQUFBQSxHQUFBQTtBQUNFQyxpQkFBS0EsRUFBRUEsQ0FBQ0E7QUFDUkEsZ0JBQUlBLEtBQUtBLEtBQUtBLENBQUNBLEVBQUVBO0FBQ2ZBLHVCQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUMxQkEsb0JBQUlBLEdBQUdBLEVBQUVBLENBQUNBO2FBQ1hBO1NBQ0ZBOztBQUdERCxZQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxFQUFFQSxvQkFBb0JBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLENBQzlDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFpQkEsRUFBQUE7QUFDdEJBLGdCQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSx3QkFBZ0JBLElBQUlBLENBQUNBLENBQUNBO0FBQ25DQSxnQkFBSUEsRUFBRUEsQ0FBQ0E7U0FDUkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDckRBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxDQUFDQSxDQUFDQTs7QUFHTEEsWUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FDWEEsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBZ0JBLEVBQUFBO0FBQ3JCQSxnQkFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsdUJBQWVBLElBQUlBLENBQUNBLENBQUNBO0FBQ3BDQSxnQkFBSUEsRUFBRUEsQ0FBQ0E7U0FDUkEsRUFBRUEsVUFBQ0EsTUFBY0EsRUFBRUEsV0FBbUJBLEVBQUFBO0FBQ3JDQSxnQkFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsQ0FBQ0E7QUFDckRBLGdCQUFJQSxFQUFFQSxDQUFDQTtTQUNSQSxDQUFDQSxDQUFDQTtLQUNOQTs7QUFHREQsUUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUE7QUFDVkEsYUFBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7S0FDMUNBO0NBQ0ZBOztJQUVELHdCQUFBO0FBR0VHLGFBSEYsd0JBQUEsQ0FHY0EsT0FBZ0NBLEVBQUFBOzhCQUg5Qyx3QkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFHekJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0tBQzVCQTs7aUJBTEgsd0JBQUE7O2VBTU9ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUMxQkE7U0FDRkE7OztlQUNHRixnQkFBQUE7QUFDRkcsZ0JBQUlBLEtBQUtBLEVBQUVBO0FBQ1RBLDRCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNwQkEscUJBQUtBLEdBQUdBLElBQUlBLENBQUNBO0FBQ2JBLG9CQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTthQUN4QkE7U0FDRkE7OztXQWxCSCx3QkFBQTs7O3FCQUFBLHdCQUFBIiwiZmlsZSI6InRzL2xpc3RlbmVycy9Db250cm9sR2FtZVNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCBSRVNUIGZyb20gJ2N1LXJlc3RhcGknO1xuaW1wb3J0IEhhbmRsZXNDb250cm9sR2FtZVNjb3JlIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbEdhbWUsIFBvcHVsYXRpb24gfSBmcm9tICdjdS1jb3JlJztcbmRlY2xhcmUgY29uc3QgY3VBUEk6IGFueTtcblxuY29uc3QgUE9MTF9JTlRFUlZBTCA9IDUwMDA7XG5sZXQgdGltZXI6IGFueTtcblxuZnVuY3Rpb24gcnVuKGVtaXR0ZXI6IEV2ZW50RW1pdHRlciwgdG9waWM6IHN0cmluZykge1xuICBsZXQgcmVzdCA9IG5ldyBSRVNUKCk7XG4gIGxldCBpbmZvOiBhbnkgPSB7fTtcblxuICAvLyBIYW5kbGUgdGlja1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGxldCBjb3VudCA9IDI7XG5cbiAgICAvLyB3YWl0IGZvciBib3RoIHJlcXVlc3RzIHRvIGZpbmlzaCBiZWZvcmUgdHJpZ2dlcmluZ1xuICAgIC8vIHRoZSBldmVudFxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBjb3VudC0tO1xuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5mbyk7XG4gICAgICAgIGluZm8gPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgY29udHJvbCBnYW1lIChzY29yZSBvbmx5KVxuICAgIHJlc3QuY29udHJvbEdhbWUoeyBpbmNsdWRlQ29udHJvbFBvaW50czogZmFsc2UgfSlcbiAgICAgIC50aGVuKChkYXRhOiBDb250cm9sR2FtZSkgPT4ge1xuICAgICAgICBpbmZvLnNjb3JlID0gbmV3IENvbnRyb2xHYW1lKGRhdGEpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCAoc3RhdHVzOiBzdHJpbmcsIGVycm9yVGhyb3duOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaW5mby5lcnJvciA9IHsgc3RhdHVzOiBzdGF0dXMsIHJlYXNvbjogZXJyb3JUaHJvd24gfTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG5cbiAgICAvLyBhbmQgcGxheWVyIGNvdW50c1xuICAgIHJlc3QucGxheWVycygpXG4gICAgICAudGhlbigoZGF0YTogUG9wdWxhdGlvbikgPT4ge1xuICAgICAgICBpbmZvLnBsYXllcnMgPSBuZXcgUG9wdWxhdGlvbihkYXRhKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgKHN0YXR1czogc3RyaW5nLCBlcnJvclRocm93bjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGluZm8uZXJyb3IgPSB7IHN0YXR1czogc3RhdHVzLCByZWFzb246IGVycm9yVGhyb3duIH07XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgdGltZXIgbm90IHJ1bm5pbmcsIHN0YXJ0IGl0XG4gIGlmICghdGltZXIpIHtcbiAgICB0aW1lciA9IHNldEludGVydmFsKHRpY2ssIFBPTExfSU5URVJWQUwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xHYW1lU2NvcmVMaXN0ZW5lciB7XG4gIGxpc3RlbmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0b3BpYzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ29udHJvbEdhbWVTY29yZSkge1xuICAgIHRoaXMudG9waWMgPSBoYW5kbGVzLnRvcGljO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLnRvcGljKTtcbiAgICB9XG4gIH1cbiAgc3RvcCgpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICB0aGlzLmxpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
