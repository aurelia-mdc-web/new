import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Config } from "./services/config-dev";

export function configure(aurelia: Aurelia) {

    const config: Config = aurelia.container.get(Config);

    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/all'))
        .globalResources([]);

    if (config.developmentMode) {
        aurelia.use.developmentLogging("debug");
    }

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
