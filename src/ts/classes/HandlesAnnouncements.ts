/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Announcements as AnnouncementsAction } from '../actions/main';
export default class HandlesAnnouncements {
	name: string;
	action: any;
    constructor() {
        this.name = 'announcements';
        this.action = AnnouncementsAction;
    }
    start() : void {
        this.action.start();
    }
}
