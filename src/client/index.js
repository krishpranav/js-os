/**
 * @author krishpranav
 */

import {
    Core,
    CoreServiceProvider,
    DesktopServiceProvider,
    VFSServiceProvider,
    NotificationServiceProvider,
    SettingsServiceProvider,
    AuthServiceProvider
} from '@osjs/client';

import {PanelServiceProvider} from '@osjs/panels';
import {GUIServiceProvider} from '@osjs/gui';
import {DialogServiceProvider} from '@osjs/dialogs';
import config from './config.js';
import './index.scss';

const init = () => {
    const osjs = new Core(config, {});

    // register your service providersw
    osjs.register(CoreServiceProvider);
    osjs.register(DesktopServiceProvider);
    osjs.register(VFSServiceProvider);
    osjs.register(NotificationServiceProvider);
    osjs.register(SettingsServiceProvider, {before: true});
    osjs.register(AuthServiceProvider, {before: true});
    osjs.register(PanelServiceProvider);
    osjs.register(DialogServiceProvider);
    osjs.register(GUIServiceProvider);

    osjs.boot();
};

window.addEventListener('DOMContentLoader', () => init());