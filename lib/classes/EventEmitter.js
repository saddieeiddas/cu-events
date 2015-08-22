var internalId = 0;
var Listener = (function () {
    function Listener(topic, once, callback) {
        this.topic = topic;
        this.once = once;
        this.callback = callback;
        this.id = ++internalId;
    }
    return Listener;
})();
var EventEmitter = (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.addListener = function (topic, once, callback) {
        if (once === void 0) { once = false; }
        var listeners = this.events[topic] = this.events[topic] || [];
        var listener = new Listener(topic, once, callback);
        var i = listeners.indexOf(null);
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
                if (listeners[i] && listeners[i].id === listener.id) {
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
                if (listeners[i]) {
                    var callback = listeners[i].callback;
                    if (listeners[i].once) {
                        listeners[i] = null;
                    }
                    callback(data);
                }
            }
        }
    };
    return EventEmitter;
})();
exports.__esModule = true;
exports["default"] = EventEmitter;
