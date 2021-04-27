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
} from '@jsos/client';

import {PanelServiceProvider} from '@jsos/panels';
import {GUIServiceProvider} from '@jsos/gui';
import {DialogServiceProvider} from '@jsos/dialogs';
import config from './config.js';
import './index.scss';

const init = () => {
    const jsos = new Core(config, {});

    // register your service providersw
    jsos.register(CoreServiceProvider);
    jsos.register(DesktopServiceProvider);
    jsos.register(VFSServiceProvider);
    jsos.register(NotificationServiceProvider);
    jsos.register(SettingsServiceProvider, {before: true});
    jsos.register(AuthServiceProvider, {before: true});
    jsos.register(PanelServiceProvider);
    jsos.register(DialogServiceProvider);
    jsos.register(GUIServiceProvider);

    jsos.boot();
};

window.addEventListener('DOMContentLoader', () => init());