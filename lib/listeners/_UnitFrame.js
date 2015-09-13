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

var _cuCore = require('cu-core');

function run(emitter, topic) {
    var info = {};
    var instance = undefined;
    // Event receivers
    function nameChanged(name) {
        instance.setName(name);
        emitter.emit(topic, instance);
    }
    function raceChanged(race) {
        instance.setRace(race);
        emitter.emit(topic, instance);
    }
    function healthChanged(health, maxHealth) {
        instance.setHealth(health, maxHealth);
        emitter.emit(topic, instance);
    }
    function staminaChanged(stamina, maxStamina) {
        instance.setStamina(stamina, maxStamina);
        emitter.emit(topic, instance);
    }
    // Hook up event receivers to the relevant cuAPI methods
    switch (topic) {
        case 'character':
            instance = new _cuCore.Player({});
            cuAPI.OnCharacterNameChanged(nameChanged);
            cuAPI.OnCharacterRaceChanged(raceChanged);
            cuAPI.OnCharacterHealthChanged(healthChanged);
            cuAPI.OnCharacterStaminaChanged(staminaChanged);
            break;
        case 'enemytarget':
            instance = new _cuCore.Combatant({});
            cuAPI.OnEnemyTargetNameChanged(nameChanged);
            cuAPI.OnEnemyTargetHealthChanged(healthChanged);
            cuAPI.OnEnemyTargetStaminaChanged(staminaChanged);
            break;
        case 'friendlytarget':
            instance = new _cuCore.Combatant({});
            cuAPI.OnFriendlyTargetNameChanged(nameChanged);
            cuAPI.OnFriendlyTargetHealthChanged(healthChanged);
            cuAPI.OnFriendlyTargetStaminaChanged(staminaChanged);
            break;
    }
}

var UnitFrameListener = (function () {
    function UnitFrameListener(handles) {
        _classCallCheck(this, UnitFrameListener);

        this.listening = false;
        this.topic = handles.topic;
    }

    _createClass(UnitFrameListener, [{
        key: 'start',
        value: function start(emitter) {
            if (!this.listening) {
                this.listening = true;
                run(emitter, this.topic);
            }
        }
    }]);

    return UnitFrameListener;
})();

exports['default'] = UnitFrameListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvX1VuaXRGcmFtZS50cyJdLCJuYW1lcyI6WyJydW4iLCJydW4ubmFtZUNoYW5nZWQiLCJydW4ucmFjZUNoYW5nZWQiLCJydW4uaGVhbHRoQ2hhbmdlZCIsInJ1bi5zdGFtaW5hQ2hhbmdlZCIsIlVuaXRGcmFtZUxpc3RlbmVyIiwiVW5pdEZyYW1lTGlzdGVuZXIuY29uc3RydWN0b3IiLCJVbml0RnJhbWVMaXN0ZW5lci5zdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3NCQU9rQyxTQUFTOztBQUkzQyxTQUFBLEdBQUEsQ0FBYSxPQUFxQixFQUFFLEtBQWEsRUFBQTtBQUMvQ0EsUUFBTUEsSUFBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7QUFDckJBLFFBQUlBLFFBQW1CQSxZQUFBQSxDQUFDQTs7QUFHeEJBLGFBQUFBLFdBQUFBLENBQXFCQSxJQUFZQSxFQUFBQTtBQUMvQkMsZ0JBQVFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3ZCQSxlQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtLQUMvQkE7QUFFREQsYUFBQUEsV0FBQUEsQ0FBcUJBLElBQVVBLEVBQUFBO0FBQzdCRSxnQkFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkJBLGVBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO0tBQy9CQTtBQUVERixhQUFBQSxhQUFBQSxDQUF1QkEsTUFBY0EsRUFBRUEsU0FBaUJBLEVBQUFBO0FBQ3RERyxnQkFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7QUFDdENBLGVBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO0tBQy9CQTtBQUVESCxhQUFBQSxjQUFBQSxDQUF3QkEsT0FBZUEsRUFBRUEsVUFBa0JBLEVBQUFBO0FBQ3pESSxnQkFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7QUFDekNBLGVBQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO0tBQy9CQTs7QUFHREosWUFBUUEsS0FBS0E7QUFDWEEsYUFBS0EsV0FBV0E7QUFDZEEsb0JBQVFBLEdBQUdBLG1CQUFtQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDbENBLGlCQUFLQSxDQUFDQSxzQkFBc0JBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO0FBQzFDQSxpQkFBS0EsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtBQUMxQ0EsaUJBQUtBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7QUFDOUNBLGlCQUFLQSxDQUFDQSx5QkFBeUJBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0FBQ2hEQSxrQkFBTUE7QUFBQUEsQUFDUkEsYUFBS0EsYUFBYUE7QUFDaEJBLG9CQUFRQSxHQUFHQSxzQkFBeUJBLEVBQUVBLENBQUNBLENBQUNBO0FBQ3hDQSxpQkFBS0EsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtBQUM1Q0EsaUJBQUtBLENBQUNBLDBCQUEwQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7QUFDaERBLGlCQUFLQSxDQUFDQSwyQkFBMkJBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO0FBQ2xEQSxrQkFBTUE7QUFBQUEsQUFDUkEsYUFBS0EsZ0JBQWdCQTtBQUNuQkEsb0JBQVFBLEdBQUdBLHNCQUF5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDeENBLGlCQUFLQSxDQUFDQSwyQkFBMkJBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO0FBQy9DQSxpQkFBS0EsQ0FBQ0EsNkJBQTZCQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtBQUNuREEsaUJBQUtBLENBQUNBLDhCQUE4QkEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7QUFDckRBLGtCQUFNQTtBQUFBQSxLQUNUQTtDQUNGQTs7SUFFRCxpQkFBQTtBQUdFSyxhQUhGLGlCQUFBLENBR2NBLE9BQVlBLEVBQUFBOzhCQUgxQixpQkFBQTs7QUFDRUMsWUFBQUEsQ0FBQUEsU0FBU0EsR0FBWUEsS0FBS0EsQ0FBQ0E7QUFHekJBLFlBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0tBQzVCQTs7aUJBTEgsaUJBQUE7O2VBTU9ELGVBQUNBLE9BQXFCQSxFQUFBQTtBQUN6QkUsZ0JBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBO0FBQ25CQSxvQkFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDdEJBLG1CQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTthQUMxQkE7U0FDRkE7OztXQVhILGlCQUFBOzs7cUJBQUEsaUJBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL19Vbml0RnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jbGFzc2VzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgeyBDb21iYXRhbnQsIFBsYXllciB9IGZyb20gJ2N1LWNvcmUnO1xuaW1wb3J0IHsgcmFjZSB9IGZyb20gJ2N1LWNvcmUnO1xuZGVjbGFyZSBjb25zdCBjdUFQSTogYW55O1xuXG5mdW5jdGlvbiBydW4oZW1pdHRlcjogRXZlbnRFbWl0dGVyLCB0b3BpYzogc3RyaW5nKSB7XG4gIGNvbnN0IGluZm86IGFueSA9IHt9O1xuICBsZXQgaW5zdGFuY2U6IENvbWJhdGFudDtcblxuICAvLyBFdmVudCByZWNlaXZlcnNcbiAgZnVuY3Rpb24gbmFtZUNoYW5nZWQobmFtZTogc3RyaW5nKSB7XG4gICAgaW5zdGFuY2Uuc2V0TmFtZShuYW1lKTtcbiAgICBlbWl0dGVyLmVtaXQodG9waWMsIGluc3RhbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhY2VDaGFuZ2VkKHJhY2U6IHJhY2UpIHtcbiAgICBpbnN0YW5jZS5zZXRSYWNlKHJhY2UpO1xuICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5zdGFuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGVhbHRoQ2hhbmdlZChoZWFsdGg6IG51bWJlciwgbWF4SGVhbHRoOiBudW1iZXIpIHtcbiAgICBpbnN0YW5jZS5zZXRIZWFsdGgoaGVhbHRoLCBtYXhIZWFsdGgpO1xuICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5zdGFuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhbWluYUNoYW5nZWQoc3RhbWluYTogbnVtYmVyLCBtYXhTdGFtaW5hOiBudW1iZXIpIHtcbiAgICBpbnN0YW5jZS5zZXRTdGFtaW5hKHN0YW1pbmEsIG1heFN0YW1pbmEpO1xuICAgIGVtaXR0ZXIuZW1pdCh0b3BpYywgaW5zdGFuY2UpO1xuICB9XG5cbiAgLy8gSG9vayB1cCBldmVudCByZWNlaXZlcnMgdG8gdGhlIHJlbGV2YW50IGN1QVBJIG1ldGhvZHNcbiAgc3dpdGNoICh0b3BpYykge1xuICAgIGNhc2UgJ2NoYXJhY3Rlcic6XG4gICAgICBpbnN0YW5jZSA9IG5ldyBQbGF5ZXIoPFBsYXllcj57fSk7XG4gICAgICBjdUFQSS5PbkNoYXJhY3Rlck5hbWVDaGFuZ2VkKG5hbWVDaGFuZ2VkKTtcbiAgICAgIGN1QVBJLk9uQ2hhcmFjdGVyUmFjZUNoYW5nZWQocmFjZUNoYW5nZWQpO1xuICAgICAgY3VBUEkuT25DaGFyYWN0ZXJIZWFsdGhDaGFuZ2VkKGhlYWx0aENoYW5nZWQpO1xuICAgICAgY3VBUEkuT25DaGFyYWN0ZXJTdGFtaW5hQ2hhbmdlZChzdGFtaW5hQ2hhbmdlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlbmVteXRhcmdldCc6XG4gICAgICBpbnN0YW5jZSA9IG5ldyBDb21iYXRhbnQoPENvbWJhdGFudD57fSk7XG4gICAgICBjdUFQSS5PbkVuZW15VGFyZ2V0TmFtZUNoYW5nZWQobmFtZUNoYW5nZWQpO1xuICAgICAgY3VBUEkuT25FbmVteVRhcmdldEhlYWx0aENoYW5nZWQoaGVhbHRoQ2hhbmdlZCk7XG4gICAgICBjdUFQSS5PbkVuZW15VGFyZ2V0U3RhbWluYUNoYW5nZWQoc3RhbWluYUNoYW5nZWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZnJpZW5kbHl0YXJnZXQnOlxuICAgICAgaW5zdGFuY2UgPSBuZXcgQ29tYmF0YW50KDxDb21iYXRhbnQ+e30pO1xuICAgICAgY3VBUEkuT25GcmllbmRseVRhcmdldE5hbWVDaGFuZ2VkKG5hbWVDaGFuZ2VkKTtcbiAgICAgIGN1QVBJLk9uRnJpZW5kbHlUYXJnZXRIZWFsdGhDaGFuZ2VkKGhlYWx0aENoYW5nZWQpO1xuICAgICAgY3VBUEkuT25GcmllbmRseVRhcmdldFN0YW1pbmFDaGFuZ2VkKHN0YW1pbmFDaGFuZ2VkKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXRGcmFtZUxpc3RlbmVyIHtcbiAgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IGFueSkge1xuICAgIHRoaXMudG9waWMgPSBoYW5kbGVzLnRvcGljO1xuICB9XG4gIHN0YXJ0KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIHJ1bihlbWl0dGVyLCB0aGlzLnRvcGljKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=