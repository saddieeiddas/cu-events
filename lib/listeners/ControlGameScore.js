var cu_restapi_1 = require('cu-restapi');
var POLL_INTERVAL = 5000;
var timer;
function run(emitter, topic) {
    var rest = new cu_restapi_1["default"]();
    var info = {};
    // Handle tick
    function tick() {
        var count = 2;
        // wait for both requests to finish before triggering
        // the event
        function done() {
            count--;
            if (count === 0) {
                emitter.emit(topic, info);
                info = {};
            }
        }
        // Get control game (score only)
        rest.controlGame({ includeControlPoints: false })
            .then(function (data) {
            info.score = data;
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
        // and player counts
        rest.players()
            .then(function (data) {
            info.players = data;
            done();
        }, function (status, errorThrown) {
            info.error = { status: status, reason: errorThrown };
            done();
        });
    }
    // if timer not running, start it
    if (!timer) {
        timer = setInterval(tick, POLL_INTERVAL);
    }
}
var ControlGameScoreListener = (function () {
    function ControlGameScoreListener(handles) {
        this.listening = false;
        this.topic = handles.name;
    }
    ControlGameScoreListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
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
