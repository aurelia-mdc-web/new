import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Config} from "./services/config-dev";

export function configure(aurelia: Aurelia) {

    const config:Config = aurelia.container.get(Config);

    aurelia.use
        .standardConfiguration()
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/card'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/data-table'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/dialog'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/drawer'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/elevation'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/expandable'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/form-field'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/icon-button'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/layout-grid'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/linear-progress'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/lookup'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/select'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/switch'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/text-field'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/tab-bar'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/top-app-bar'))
        .plugin(PLATFORM.moduleName('@aurelia-mdc-web/typography'))
        // .plugin(PLATFORM.moduleName('@aurelia-mdc-web/lookup'))
        .globalResources([

        ]);

    if (config.developmentMode) {
        aurelia.use.developmentLogging("debug");
    }

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
