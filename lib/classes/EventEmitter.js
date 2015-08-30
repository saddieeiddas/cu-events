/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
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
    /**
     * addListener() is called to register a listener for a topic.
     *
     * @param topic {string}         Topic name
     * @param once {boolean}         Fire event only once (auto-unregister) [optional]
     * @param callback {function}    Handler to call when topic is fired
     */
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
    /**
     * on() is called to register a listener for a topic.
     *
     * @param topic {string}         Topic name
     * @param callback {function}    Handler to call when topic is fired
     */
    EventEmitter.prototype.on = function (topic, callback) {
        return this.addListener(topic, false, callback);
    };
    /**
     * listenOnce() is called to register a listener for a topic that will
     * fire only once before being auto-removed.
     *
     * @param topic {string}         Topic name
     * @param callback {function}    Handler to call when topic is fired
     */
    EventEmitter.prototype.listenOnce = function (topic, callback) {
        return this.addListener(topic, true, callback);
    };
    /**
     * removeListener() is called to deregister an existing listener
     *
     * @param listener {any}   Handle returned by previous call to addListener()
     */
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
    /**
     * emit() is called to pass the supplied data to the registered handlers for the topic
     *
     * @param topic {string}         Topic name
     * @param data {any}  The data being passed (depends on topic)
     */
    EventEmitter.prototype.emit = function (topic, data) {
        var listeners = this.events[topic];
        if (listeners && listeners.length) {
            for (var i = 0; i < listeners.length; i++) {
                if (listeners[i]) {
                    var listener = listeners[i];
                    if (listener.once) {
                        listeners[i] = null;
                    }
                    listener.callback(data);
                }
            }
        }
    };
    return EventEmitter;
})();
exports.__esModule = true;
exports["default"] = EventEmitter;
