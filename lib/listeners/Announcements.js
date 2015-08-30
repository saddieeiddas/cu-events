var EVENT_NAME = 'announcement';
function run(emitter) {
    cuAPI.OnAnnouncement(function (message, type) {
        emitter.emit(EVENT_NAME, {
            message: message,
            type: type
        });
    });
}
var AnnouncementsListener = (function () {
    function AnnouncementsListener() {
        this.listening = false;
    }
    AnnouncementsListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter);
        }
    };
    return AnnouncementsListener;
})();
exports.__esModule = true;
exports["default"] = AnnouncementsListener;
