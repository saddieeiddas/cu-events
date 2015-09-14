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

var CharacterListener = (function (_UnitFrameListener) {
    _inherits(CharacterListener, _UnitFrameListener);

    function CharacterListener(handles) {
        _classCallCheck(this, CharacterListener);

        _get(Object.getPrototypeOf(CharacterListener.prototype), 'constructor', this).call(this, handles);
    }

    return CharacterListener;
})(_UnitFrame2['default']);

exports['default'] = CharacterListener;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2xpc3RlbmVycy90cy9saXN0ZW5lcnMvQ2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbIkNoYXJhY3Rlckxpc3RlbmVyIiwiQ2hhcmFjdGVyTGlzdGVuZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBTThCLGNBQWM7Ozs7SUFHNUMsaUJBQUE7Y0FBQSxpQkFBQTs7QUFDRUEsYUFERixpQkFBQSxDQUNjQSxPQUF5QkEsRUFBQUE7OEJBRHZDLGlCQUFBOztBQUVJQyxtQ0FGSixpQkFBQSw2Q0FFVUEsT0FBT0EsRUFBRUE7S0FDaEJBOztXQUhILGlCQUFBOzs7cUJBQUEsaUJBQUEiLCJmaWxlIjoidHMvbGlzdGVuZXJzL0NoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgVW5pdEZyYW1lTGlzdGVuZXIgZnJvbSAnLi9fVW5pdEZyYW1lJztcbmltcG9ydCBIYW5kbGVzQ2hhcmFjdGVyIGZyb20gJy4uL2NsYXNzZXMvSGFuZGxlc0NoYXJhY3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3Rlckxpc3RlbmVyIGV4dGVuZHMgVW5pdEZyYW1lTGlzdGVuZXIge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVzOiBIYW5kbGVzQ2hhcmFjdGVyKSB7XG4gICAgc3VwZXIoaGFuZGxlcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
