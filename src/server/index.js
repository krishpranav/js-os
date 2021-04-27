/**
 * @author krishpranav
 */

const {
    Core,
    CoreServiceProvider,
    PackageServiceProvider,
    VFSServiceProvider,
    AuthServiceProvider,
    SettingsServiceProvider
} = require('@jsos/server');

const config = require('./config.js');
const jsos = new Core(config, {});

jsos.register(CoreServiceProvider, {before: true});
jsos.register(PackageServiceProvider);
jsos.register(VFSServiceProvider);
jsos.register(AuthServiceProvider);
jsos.register(SettingsServiceProvider);

const shutdown = signal => (error) => {
    if (error instanceof Error) {
        console.error(error);
    }

    jsos.destroy(() => process.exit(signal));
};

process.on('SIGTERM', shutdown(0));
process.on('SIGINT', shutdown(0));
process.on('exit', shutdown(0));

jsos.boot().catch(shutdown(1));