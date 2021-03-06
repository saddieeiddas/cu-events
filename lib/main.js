/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _listeners;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _classesEventEmitter = require('./classes/EventEmitter');

var _classesEventEmitter2 = _interopRequireDefault(_classesEventEmitter);

var _classesHandlesAnnouncements = require('./classes/HandlesAnnouncements');

var _classesHandlesAnnouncements2 = _interopRequireDefault(_classesHandlesAnnouncements);

var _classesHandlesCharacter = require('./classes/HandlesCharacter');

var _classesHandlesCharacter2 = _interopRequireDefault(_classesHandlesCharacter);

var _classesHandlesEnemyTarget = require('./classes/HandlesEnemyTarget');

var _classesHandlesEnemyTarget2 = _interopRequireDefault(_classesHandlesEnemyTarget);

var _classesHandlesFriendlyTarget = require('./classes/HandlesFriendlyTarget');

var _classesHandlesFriendlyTarget2 = _interopRequireDefault(_classesHandlesFriendlyTarget);

var _classesHandlesControlGame = require('./classes/HandlesControlGame');

var _classesHandlesControlGame2 = _interopRequireDefault(_classesHandlesControlGame);

var _classesHandlesControlGameScore = require('./classes/HandlesControlGameScore');

var _classesHandlesControlGameScore2 = _interopRequireDefault(_classesHandlesControlGameScore);

var _listenersInit = require('./listeners/Init');

var _listenersInit2 = _interopRequireDefault(_listenersInit);

var _listenersAnnouncements = require('./listeners/Announcements');

var _listenersAnnouncements2 = _interopRequireDefault(_listenersAnnouncements);

var _listenersCharacter = require('./listeners/Character');

var _listenersCharacter2 = _interopRequireDefault(_listenersCharacter);

var _listenersEnemyTarget = require('./listeners/EnemyTarget');

var _listenersEnemyTarget2 = _interopRequireDefault(_listenersEnemyTarget);

var _listenersFriendlyTarget = require('./listeners/FriendlyTarget');

var _listenersFriendlyTarget2 = _interopRequireDefault(_listenersFriendlyTarget);

var _listenersControlGame = require('./listeners/ControlGame');

var _listenersControlGame2 = _interopRequireDefault(_listenersControlGame);

var _listenersControlGameScore = require('./listeners/ControlGameScore');

var _listenersControlGameScore2 = _interopRequireDefault(_listenersControlGameScore);

// Handle* objects.  These define both the event name, and the Reflux action used
// to trigger the stores (TODO: This latter part is not working)
var handlesAnnouncements = new _classesHandlesAnnouncements2['default']();
var handlesCharacter = new _classesHandlesCharacter2['default']();
var handlesEnemyTarget = new _classesHandlesEnemyTarget2['default']();
var handlesFriendlyTarget = new _classesHandlesFriendlyTarget2['default']();
var handlesControlGame = new _classesHandlesControlGame2['default']();
var handlesControlGameScore = new _classesHandlesControlGameScore2['default']();
// Listeners
var listeners = (_listeners = {
    'init': new _listenersInit2['default']()
}, _defineProperty(_listeners, handlesAnnouncements.topic, new _listenersAnnouncements2['default'](handlesAnnouncements)), _defineProperty(_listeners, handlesCharacter.topic, new _listenersCharacter2['default'](handlesCharacter)), _defineProperty(_listeners, handlesEnemyTarget.topic, new _listenersEnemyTarget2['default'](handlesEnemyTarget)), _defineProperty(_listeners, handlesFriendlyTarget.topic, new _listenersFriendlyTarget2['default'](handlesFriendlyTarget)), _defineProperty(_listeners, handlesControlGame.topic, new _listenersControlGame2['default'](handlesControlGame)), _defineProperty(_listeners, handlesControlGameScore.topic, new _listenersControlGameScore2['default'](handlesControlGameScore)), _listeners);
// Event Emitter.  A single instance of event emitter handles all cu-events events
var emitter = new _classesEventEmitter2['default']();
// register for an event group
function on(topic, callback) {
    var listener = listeners[topic];
    if (listener) {
        var handle = emitter.addListener(topic, listener.once, callback);
        // Start the listener.  The start() method will handle multiple
        // starts.  In some cases, the listener does need kickstarting
        // each time, in other cases, not.
        listener.start(emitter);
        return handle;
    }
}
function off(listener) {
    emitter.removeListener(listener);
}
function addListener(topic, callback) {
    on(topic, callback);
}
function removeListener(listener) {
    off(listener);
}
exports['default'] = {
    handlesAnnouncements: handlesAnnouncements,
    handlesCharacter: handlesCharacter,
    handlesEnemyTarget: handlesEnemyTarget,
    handlesFriendlyTarget: handlesFriendlyTarget,
    handlesControlGame: handlesControlGame,
    handlesControlGameScore: handlesControlGameScore,
    on: on,
    off: off,
    addListener: addListener,
    removeListener: removeListener
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4udHMiXSwibmFtZXMiOlsib24iLCJvZmYiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzttQ0FReUIsd0JBQXdCOzs7OzJDQUVoQixnQ0FBZ0M7Ozs7dUNBQ3BDLDRCQUE0Qjs7Ozt5Q0FDMUIsOEJBQThCOzs7OzRDQUMzQixpQ0FBaUM7Ozs7eUNBQ3BDLDhCQUE4Qjs7Ozs4Q0FDekIsbUNBQW1DOzs7OzZCQUU5QyxrQkFBa0I7Ozs7c0NBQ1QsMkJBQTJCOzs7O2tDQUMvQix1QkFBdUI7Ozs7b0NBQ3JCLHlCQUF5Qjs7Ozt1Q0FDdEIsNEJBQTRCOzs7O29DQUMvQix5QkFBeUI7Ozs7eUNBQ3BCLDhCQUE4Qjs7Ozs7O0FBSW5FLElBQU0sb0JBQW9CLEdBQXlCLDhDQUEwQixDQUFDO0FBQzlFLElBQU0sZ0JBQWdCLEdBQXFCLDBDQUFzQixDQUFDO0FBQ2xFLElBQU0sa0JBQWtCLEdBQXVCLDRDQUF3QixDQUFDO0FBQ3hFLElBQU0scUJBQXFCLEdBQTBCLCtDQUEyQixDQUFDO0FBQ2pGLElBQU0sa0JBQWtCLEdBQXVCLDRDQUF3QixDQUFDO0FBQ3hFLElBQU0sdUJBQXVCLEdBQTRCLGlEQUE2QixDQUFDOztBQUd2RixJQUFNLFNBQVM7QUFDYixVQUFNLEVBQUUsZ0NBQWtCOytCQUN6QixvQkFBb0IsQ0FBQyxLQUFLLEVBQUcsd0NBQTBCLG9CQUFvQixDQUFDLCtCQUM1RSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUcsb0NBQXNCLGdCQUFnQixDQUFDLCtCQUNoRSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUcsc0NBQXdCLGtCQUFrQixDQUFDLCtCQUN0RSxxQkFBcUIsQ0FBQyxLQUFLLEVBQUcseUNBQTJCLHFCQUFxQixDQUFDLCtCQUMvRSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUcsc0NBQXdCLGtCQUFrQixDQUFDLCtCQUN0RSx1QkFBdUIsQ0FBQyxLQUFLLEVBQUcsMkNBQTZCLHVCQUF1QixDQUFDLGNBQ3ZGLENBQUM7O0FBR0YsSUFBTSxPQUFPLEdBQWlCLHNDQUFrQixDQUFDOztBQUdqRCxTQUFBLEVBQUEsQ0FBWSxLQUFhLEVBQUUsUUFBNkIsRUFBQTtBQUN0REEsUUFBTUEsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDbENBLFFBQUlBLFFBQVFBLEVBQUVBO0FBQ1pBLFlBQU1BLE1BQU1BLEdBQUdBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBOzs7O0FBSW5FQSxnQkFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7QUFDeEJBLGVBQU9BLE1BQU1BLENBQUNBO0tBQ2ZBO0NBQ0ZBO0FBRUQsU0FBQSxHQUFBLENBQWEsUUFBYSxFQUFBO0FBQ3hCQyxXQUFPQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtDQUNsQ0E7QUFFRCxTQUFBLFdBQUEsQ0FBcUIsS0FBYSxFQUFFLFFBQTZCLEVBQUE7QUFDL0RDLE1BQUVBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO0NBQ3JCQTtBQUVELFNBQUEsY0FBQSxDQUF3QixRQUFhLEVBQUE7QUFDbkNDLE9BQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0NBQ2ZBO3FCQUVjO0FBQ2Isd0JBQW9CLEVBQXBCLG9CQUFvQjtBQUNwQixvQkFBZ0IsRUFBaEIsZ0JBQWdCO0FBQ2hCLHNCQUFrQixFQUFsQixrQkFBa0I7QUFDbEIseUJBQXFCLEVBQXJCLHFCQUFxQjtBQUNyQixzQkFBa0IsRUFBbEIsa0JBQWtCO0FBQ2xCLDJCQUF1QixFQUF2Qix1QkFBdUI7QUFDdkIsTUFBRSxFQUFGLEVBQUU7QUFDRixPQUFHLEVBQUgsR0FBRztBQUNILGVBQVcsRUFBWCxXQUFXO0FBQ1gsa0JBQWMsRUFBZCxjQUFjO0NBQ2YiLCJmaWxlIjoidHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHNkL3RzZC5kLnRzXCIgLz5cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NsYXNzZXMvRXZlbnRFbWl0dGVyJztcblxuaW1wb3J0IEhhbmRsZXNBbm5vdW5jZW1lbnRzIGZyb20gJy4vY2xhc3Nlcy9IYW5kbGVzQW5ub3VuY2VtZW50cyc7XG5pbXBvcnQgSGFuZGxlc0NoYXJhY3RlciBmcm9tICcuL2NsYXNzZXMvSGFuZGxlc0NoYXJhY3Rlcic7XG5pbXBvcnQgSGFuZGxlc0VuZW15VGFyZ2V0IGZyb20gJy4vY2xhc3Nlcy9IYW5kbGVzRW5lbXlUYXJnZXQnO1xuaW1wb3J0IEhhbmRsZXNGcmllbmRseVRhcmdldCBmcm9tICcuL2NsYXNzZXMvSGFuZGxlc0ZyaWVuZGx5VGFyZ2V0JztcbmltcG9ydCBIYW5kbGVzQ29udHJvbEdhbWUgZnJvbSAnLi9jbGFzc2VzL0hhbmRsZXNDb250cm9sR2FtZSc7XG5pbXBvcnQgSGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUgZnJvbSAnLi9jbGFzc2VzL0hhbmRsZXNDb250cm9sR2FtZVNjb3JlJztcblxuaW1wb3J0IEluaXRMaXN0ZW5lciBmcm9tICcuL2xpc3RlbmVycy9Jbml0JztcbmltcG9ydCBBbm5vdW5jZW1lbnRzTGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcnMvQW5ub3VuY2VtZW50cyc7XG5pbXBvcnQgQ2hhcmFjdGVyTGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcnMvQ2hhcmFjdGVyJztcbmltcG9ydCBFbmVteVRhcmdldExpc3RlbmVyIGZyb20gJy4vbGlzdGVuZXJzL0VuZW15VGFyZ2V0JztcbmltcG9ydCBGcmllbmRseVRhcmdldExpc3RlbmVyIGZyb20gJy4vbGlzdGVuZXJzL0ZyaWVuZGx5VGFyZ2V0JztcbmltcG9ydCBDb250cm9sR2FtZUxpc3RlbmVyIGZyb20gJy4vbGlzdGVuZXJzL0NvbnRyb2xHYW1lJztcbmltcG9ydCBDb250cm9sR2FtZVNjb3JlTGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcnMvQ29udHJvbEdhbWVTY29yZSc7XG5cbi8vIEhhbmRsZSogb2JqZWN0cy4gIFRoZXNlIGRlZmluZSBib3RoIHRoZSBldmVudCBuYW1lLCBhbmQgdGhlIFJlZmx1eCBhY3Rpb24gdXNlZFxuLy8gdG8gdHJpZ2dlciB0aGUgc3RvcmVzIChUT0RPOiBUaGlzIGxhdHRlciBwYXJ0IGlzIG5vdCB3b3JraW5nKVxuY29uc3QgaGFuZGxlc0Fubm91bmNlbWVudHM6IEhhbmRsZXNBbm5vdW5jZW1lbnRzID0gbmV3IEhhbmRsZXNBbm5vdW5jZW1lbnRzKCk7XG5jb25zdCBoYW5kbGVzQ2hhcmFjdGVyOiBIYW5kbGVzQ2hhcmFjdGVyID0gbmV3IEhhbmRsZXNDaGFyYWN0ZXIoKTtcbmNvbnN0IGhhbmRsZXNFbmVteVRhcmdldDogSGFuZGxlc0VuZW15VGFyZ2V0ID0gbmV3IEhhbmRsZXNFbmVteVRhcmdldCgpO1xuY29uc3QgaGFuZGxlc0ZyaWVuZGx5VGFyZ2V0OiBIYW5kbGVzRnJpZW5kbHlUYXJnZXQgPSBuZXcgSGFuZGxlc0ZyaWVuZGx5VGFyZ2V0KCk7XG5jb25zdCBoYW5kbGVzQ29udHJvbEdhbWU6IEhhbmRsZXNDb250cm9sR2FtZSA9IG5ldyBIYW5kbGVzQ29udHJvbEdhbWUoKTtcbmNvbnN0IGhhbmRsZXNDb250cm9sR2FtZVNjb3JlOiBIYW5kbGVzQ29udHJvbEdhbWVTY29yZSA9IG5ldyBIYW5kbGVzQ29udHJvbEdhbWVTY29yZSgpO1xuXG4vLyBMaXN0ZW5lcnNcbmNvbnN0IGxpc3RlbmVyczogYW55ID0ge1xuICAnaW5pdCc6IG5ldyBJbml0TGlzdGVuZXIoKSxcbiAgW2hhbmRsZXNBbm5vdW5jZW1lbnRzLnRvcGljXTogbmV3IEFubm91bmNlbWVudHNMaXN0ZW5lcihoYW5kbGVzQW5ub3VuY2VtZW50cyksXG4gIFtoYW5kbGVzQ2hhcmFjdGVyLnRvcGljXTogbmV3IENoYXJhY3Rlckxpc3RlbmVyKGhhbmRsZXNDaGFyYWN0ZXIpLFxuICBbaGFuZGxlc0VuZW15VGFyZ2V0LnRvcGljXTogbmV3IEVuZW15VGFyZ2V0TGlzdGVuZXIoaGFuZGxlc0VuZW15VGFyZ2V0KSxcbiAgW2hhbmRsZXNGcmllbmRseVRhcmdldC50b3BpY106IG5ldyBGcmllbmRseVRhcmdldExpc3RlbmVyKGhhbmRsZXNGcmllbmRseVRhcmdldCksXG4gIFtoYW5kbGVzQ29udHJvbEdhbWUudG9waWNdOiBuZXcgQ29udHJvbEdhbWVMaXN0ZW5lcihoYW5kbGVzQ29udHJvbEdhbWUpLFxuICBbaGFuZGxlc0NvbnRyb2xHYW1lU2NvcmUudG9waWNdOiBuZXcgQ29udHJvbEdhbWVTY29yZUxpc3RlbmVyKGhhbmRsZXNDb250cm9sR2FtZVNjb3JlKVxufTtcblxuLy8gRXZlbnQgRW1pdHRlci4gIEEgc2luZ2xlIGluc3RhbmNlIG9mIGV2ZW50IGVtaXR0ZXIgaGFuZGxlcyBhbGwgY3UtZXZlbnRzIGV2ZW50c1xuY29uc3QgZW1pdHRlcjogRXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4vLyByZWdpc3RlciBmb3IgYW4gZXZlbnQgZ3JvdXBcbmZ1bmN0aW9uIG9uKHRvcGljOiBzdHJpbmcsIGNhbGxiYWNrOiAoaW5mbzogYW55KSA9PiB2b2lkKTogYW55IHtcbiAgY29uc3QgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbdG9waWNdO1xuICBpZiAobGlzdGVuZXIpIHtcbiAgICBjb25zdCBoYW5kbGUgPSBlbWl0dGVyLmFkZExpc3RlbmVyKHRvcGljLCBsaXN0ZW5lci5vbmNlLCBjYWxsYmFjayk7XG4gICAgLy8gU3RhcnQgdGhlIGxpc3RlbmVyLiAgVGhlIHN0YXJ0KCkgbWV0aG9kIHdpbGwgaGFuZGxlIG11bHRpcGxlXG4gICAgLy8gc3RhcnRzLiAgSW4gc29tZSBjYXNlcywgdGhlIGxpc3RlbmVyIGRvZXMgbmVlZCBraWNrc3RhcnRpbmdcbiAgICAvLyBlYWNoIHRpbWUsIGluIG90aGVyIGNhc2VzLCBub3QuXG4gICAgbGlzdGVuZXIuc3RhcnQoZW1pdHRlcik7XG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmYobGlzdGVuZXI6IGFueSk6IHZvaWQge1xuICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIodG9waWM6IHN0cmluZywgY2FsbGJhY2s6IChpbmZvOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgb24odG9waWMsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXI6IGFueSk6IHZvaWQge1xuICBvZmYobGlzdGVuZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGhhbmRsZXNBbm5vdW5jZW1lbnRzLFxuICBoYW5kbGVzQ2hhcmFjdGVyLFxuICBoYW5kbGVzRW5lbXlUYXJnZXQsXG4gIGhhbmRsZXNGcmllbmRseVRhcmdldCxcbiAgaGFuZGxlc0NvbnRyb2xHYW1lLFxuICBoYW5kbGVzQ29udHJvbEdhbWVTY29yZSxcbiAgb24sXG4gIG9mZixcbiAgYWRkTGlzdGVuZXIsXG4gIHJlbW92ZUxpc3RlbmVyXG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9
