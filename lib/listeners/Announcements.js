function run(emitter, topic) {
    cuAPI.OnAnnouncement(function (message, type) {
        emitter.emit(topic, {
            message: message,
            type: type
        });
    });
}
var AnnouncementsListener = (function () {
    function AnnouncementsListener(handles) {
        this.listening = false;
        this.handles = handles;
    }
    AnnouncementsListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.handles.name);
        }
    };
    return AnnouncementsListener;
})();
exports.__esModule = true;
exports["default"] = AnnouncementsListener;
