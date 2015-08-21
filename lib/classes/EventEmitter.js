var internalId = 0;
var Listener = (function () {
    function Listener(topic, callback) {
        this.topic = topic;
        this.callback = callback;
        this.id = ++internalId;
    }
    return Listener;
})();
var EventEmitter = (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.addListener = function (topic, callback) {
        var listeners = this.events[topic] = this.events[topic] || [];
        var i = listeners.indexOf(null), listener = new Listener(topic, callback);
        if (i === -1) {
            listeners.push(listener);
        }
        else {
            listeners[i] = listener;
        }
        return listener;
    };
    EventEmitter.prototype.removeListener = function (listener) {
        var listeners = this.events[listener.topic];
        if (listeners && listeners.length) {
            for (var i = 0; i < listeners.length; i++) {
                if (listeners[i].id === listener.id) {
                    listeners[i] = null;
                    return;
                }
            }
        }
    };
    EventEmitter.prototype.emit = function (topic, data) {
        var listeners = this.events[topic];
        if (listeners && listeners.length) {
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].callback(data);
            }
        }
    };
    return EventEmitter;
})();
exports.__esModule = true;
exports["default"] = EventEmitter;
