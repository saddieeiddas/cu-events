/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _UnitFrame = require('./_UnitFrame');

var _UnitFrame2 = _interopRequireDefault(_UnitFrame);

var FriendlyTargetListener = (function (_UnitFrameListener) {
    _inherits(FriendlyTargetListener, _UnitFrameListener);

    function FriendlyTargetListener(handles) {
        _classCallCheck(this, FriendlyTargetListener);

        _get(Object.getPrototypeOf(FriendlyTargetListener.prototype), 'constructor', this).call(this, handles);
    }

    return FriendlyTargetListener;
})(_UnitFrame2['default']);

exports['default'] = FriendlyTargetListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvRnJpZW5kbHlUYXJnZXQudHMiXSwibmFtZXMiOlsiRnJpZW5kbHlUYXJnZXRMaXN0ZW5lciIsIkZyaWVuZGx5VGFyZ2V0TGlzdGVuZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBTThCLGNBQWM7Ozs7SUFHNUMsc0JBQUE7Y0FBQSxzQkFBQTs7QUFDRUEsYUFERixzQkFBQSxDQUNjQSxPQUE4QkEsRUFBQUE7OEJBRDVDLHNCQUFBOztBQUVJQyxtQ0FGSixzQkFBQSw2Q0FFVUEsT0FBT0EsRUFBRUE7S0FDaEJBOztXQUhILHNCQUFBOzs7cUJBQUEsc0JBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0ZyaWVuZGx5VGFyZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCBVbml0RnJhbWVMaXN0ZW5lciBmcm9tICcuL19Vbml0RnJhbWUnO1xuaW1wb3J0IEhhbmRsZXNGcmllbmRseVRhcmdldCBmcm9tICcuLi9jbGFzc2VzL0hhbmRsZXNGcmllbmRseVRhcmdldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZGx5VGFyZ2V0TGlzdGVuZXIgZXh0ZW5kcyBVbml0RnJhbWVMaXN0ZW5lciB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXM6IEhhbmRsZXNGcmllbmRseVRhcmdldCkge1xuICAgIHN1cGVyKGhhbmRsZXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9