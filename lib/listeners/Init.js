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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EVENT_NAME = 'init';
var initialised = false;
function run(emitter) {
    function notify() {
        emitter.emit(EVENT_NAME, {});
    }
    if (initialised) {
        notify();
    } else {
        cuAPI.OnInitialized(function () {
            initialised = true;
            notify();
        });
    }
}

var InitListener = (function () {
    function InitListener() {
        _classCallCheck(this, InitListener);

        this.once = true;
    }

    _createClass(InitListener, [{
        key: 'start',
        value: function start(emitter) {
            // for the init listener, we always want to run it
            // because it may be called post-init, in which case
            // it needs to fire the handler immediately
            run(emitter);
        }
    }]);

    return InitListener;
})();

exports['default'] = InitListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvSW5pdC50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4ubm90aWZ5IiwiSW5pdExpc3RlbmVyIiwiSW5pdExpc3RlbmVyLmNvbnN0cnVjdG9yIiwiSW5pdExpc3RlbmVyLnN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQzFCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztBQUV4QixTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFBO0FBQ2hDQSxhQUFBQSxNQUFBQSxHQUFBQTtBQUNFQyxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtLQUM5QkE7QUFDREQsUUFBSUEsV0FBV0EsRUFBRUE7QUFDZkEsY0FBTUEsRUFBRUEsQ0FBQ0E7S0FDVkEsTUFBTUE7QUFDTEEsYUFBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBQUE7QUFDbEJBLHVCQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtBQUNuQkEsa0JBQU1BLEVBQUVBLENBQUNBO1NBQ1ZBLENBQUNBLENBQUNBO0tBQ0pBO0NBQ0ZBOztJQUVELFlBQUE7QUFFRUUsYUFGRixZQUFBLEdBRUVBOzhCQUZGLFlBQUE7O0FBR0lDLFlBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0tBQ2xCQTs7aUJBSkgsWUFBQTs7ZUFLT0QsZUFBQ0EsT0FBcUJBLEVBQUFBOzs7O0FBSXpCRSxlQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtTQUNkQTs7O1dBVkgsWUFBQTs7O3FCQUFBLFlBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0luaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuLy8gVGhpcyBsaXN0ZW5lciBoYW5kbGVzIHRoZSBjdUFQSS5PbkluaXRpYWxpemVkLiAgV2hlbiB0aGUgY3VBUEkgaXNcbi8vIGluaXRpYWxpc2VkLCBhbnkgaGFuZGxlcnMgZm9yIHRoZSBcImluaXRcIiB0b3BpYyAoc2VlIGN1LWV2ZW50cy5vbigpKVxuLy8gYXJlIHRyaWdnZXJlZC4gIElmIGEgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciB0aGUgdG9waWMgYWZ0ZXJcbi8vIGluaXRpYWxpc2F0aW9uIGhhcyBhbHJlYWR5IG9jY3VyZWQsIGl0IGlzIHRyaWdnZXJlZCBpbW1lZGlhdGVseS5cbi8vXG4vLyBUaGUgY3UtZXZlbnRzLm9uKCkgbWV0aG9kIGFsd2F5cyBjYWxscyBhIGxpc3RlbmVycyBzdGFydCBtZXRob2QgdG9cbi8vIGVuc3VyZSBpdCBpcyBzdGFydGVkLCB0aGlzIGFsbG93cyB0aGlzIGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gcG9zdFxuLy8gaW5pdCByZXF1ZXN0cyBmb3Igbm90aWZpY2F0aW9uIHRoYXQgaW5pdGlhbHNpYXRpb24gaGFzIGFjY3VyZWQuXG4vLyBJdCBhbHNvIGNoZWNrcyBhIGxpc3RlbmVyJ3Mgb25jZSBwcm9wZXJ0eSB3aGljaCBpZiBzZXQgY2F1c2VzIHRoZVxuLy8gcmVnaXN0ZXJlZCBoYW5kbGVyIHRvIGJlIGRlcmVnaXN0ZXJlZCBhcyBzb29uIGFzIGl0IGlzIGZpcmVkLFxuLy8gKG9uY2UgdGltZSBvbmx5IGV2ZW50cykuXG4vL1xuLy9cdFVzYWdlOlxuLy9cdFx0aW1wb3J0IGV2ZW50cyBmcm9tICdjdS1ldmVudHMnO1xuLy9cdFx0ZXZlbnRzLm9uKFwiaW5pdFwiLCAoKSA9PiB7XG4vL1x0XHRcdC8vIGN1QVBJIGluaXRpYWxpc2VkIC8gYWxyZWFkeSBpbml0aWFsaXNlZC5cbi8vICBcdH0pO1xuLy9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5cbmRlY2xhcmUgY29uc3QgY3VBUEk6IGFueTtcblxuY29uc3QgRVZFTlRfTkFNRSA9ICdpbml0JztcbmxldCBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBydW4oZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XG4gIGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICBlbWl0dGVyLmVtaXQoRVZFTlRfTkFNRSwge30pO1xuICB9XG4gIGlmIChpbml0aWFsaXNlZCkge1xuICAgIG5vdGlmeSgpO1xuICB9IGVsc2Uge1xuICAgIGN1QVBJLk9uSW5pdGlhbGl6ZWQoKCkgPT4ge1xuICAgICAgaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdExpc3RlbmVyIHtcbiAgb25jZTogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbmNlID0gdHJ1ZTtcbiAgfVxuICBzdGFydChlbWl0dGVyOiBFdmVudEVtaXR0ZXIpOiB2b2lkIHtcbiAgICAvLyBmb3IgdGhlIGluaXQgbGlzdGVuZXIsIHdlIGFsd2F5cyB3YW50IHRvIHJ1biBpdFxuICAgIC8vIGJlY2F1c2UgaXQgbWF5IGJlIGNhbGxlZCBwb3N0LWluaXQsIGluIHdoaWNoIGNhc2VcbiAgICAvLyBpdCBuZWVkcyB0byBmaXJlIHRoZSBoYW5kbGVyIGltbWVkaWF0ZWx5XG4gICAgcnVuKGVtaXR0ZXIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9