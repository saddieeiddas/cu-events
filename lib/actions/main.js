/// <reference path="../../definitions/tsd.d.ts" />
var reflux_1 = require('reflux');
// Create actions for each event group (and store from cu-core-stores)
var Character = reflux_1["default"].createAction(['start']);
exports.Character = Character;
var EnemyTarget = reflux_1["default"].createAction(['start']);
exports.EnemyTarget = EnemyTarget;
var FriendlyTarget = reflux_1["default"].createAction(['start']);
exports.FriendlyTarget = FriendlyTarget;
// Export
