var cu_restapi_1 = require('cu-restapi');
var POLL_INTERVAL = 5000;
var timer;
function run(emitter, topic) {
    var rest = new cu_restapi_1["default"]();
    function tick() {
        // TODO: switch to using cu-restapi
        rest.controlGame({ includeControlPoints: true }).then(function (data) {
            emitter.emit(topic, data);
        }, function (status, errorThrown) {
            emitter.emit(topic, { error: { status: status, reason: errorThrown } });
        });
    }
    if (!timer) {
        setInterval(tick, POLL_INTERVAL);
    }
}
var ControlGameListener = (function () {
    function ControlGameListener(handles) {
        this.listening = false;
        this.topic = handles.topic;
    }
    ControlGameListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    ControlGameListener.prototype.stop = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            this.listening = false;
        }
    };
    return ControlGameListener;
})();
exports.__esModule = true;
exports["default"] = ControlGameListener;
