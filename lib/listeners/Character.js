var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UnitFrame_1 = require('./UnitFrame');
var CharacterListener = (function (_super) {
    __extends(CharacterListener, _super);
    function CharacterListener() {
        _super.apply(this, arguments);
        this.type = "Character";
    }
    return CharacterListener;
})(UnitFrame_1["default"]);
exports.__esModule = true;
exports["default"] = CharacterListener;
