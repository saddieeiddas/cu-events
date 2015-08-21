let internalId = 0;

class Listener {
    id: number;
    topic: string;
    callback: (data: any) => void;
    constructor(topic: string, callback : (data: any) => void) {
        this.topic = topic;
        this.callback = callback;
        this.id = ++internalId;
    }
}

export default class EventEmitter {
    events: any;
    constructor() {
        this.events = {};
    }

    addListener(topic: string, callback: (data: any) => void) : any {
        let listeners : Listener [] = this.events[topic]  = this.events[topic] || [];
        let i: number = listeners.indexOf(null),
            listener : Listener = new Listener(topic, callback);
        if (i === -1) {
            listeners.push(listener);
        } else {
            listeners[i] = listener;
        }
        return listener;
    }

    removeListener(listener: any) : void {
        let listeners: Listener[] = this.events[listener.topic];
        if (listeners && listeners.length) {
            for (let i = 0; i < listeners.length; i++) {
                if (listeners[i].id === listener.id) {
                    listeners[i] = null;
                    return;
                }
            }
        }
    }

    emit(topic: string, data: any) : void {
        let listeners: Listener[] = this.events[topic];
        if (listeners && listeners.length) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i].callback(data);
            }
        }
    }
}
