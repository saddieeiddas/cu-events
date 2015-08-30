var cu_restapi_1 = require('cu-restapi');
var EVENT_NAME = 'controlgame-score';
var POLL_INTERVAL = 5000;
var timer;
function run(emitter) {
    var rest = new cu_restapi_1["default"]();
    function tick() {
        // TODO: switch to using cu-restapi
        rest.controlGame({ includeControlPoints: false }).then(function (data) {
            try {
                data = JSON.parse(data);
            }
            catch (e) {
                data = { error: e.message };
            }
            emitter.emit(EVENT_NAME, data);
        });
    }
    if (!timer) {
        setInterval(tick, POLL_INTERVAL);
    }
}
var ControlGameScoreListener = (function () {
    function ControlGameScoreListener() {
        this.listening = false;
        this.listening = false;
    }
    ControlGameScoreListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter);
        }
    };
    ControlGameScoreListener.prototype.stop = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            this.listening = false;
        }
    };
    return ControlGameScoreListener;
})();
exports.__esModule = true;
exports["default"] = ControlGameScoreListener;
