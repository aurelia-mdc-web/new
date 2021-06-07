import {autoinject} from "aurelia-framework";
import {ICustomRouteConfig} from "../../models/navigation";
import {NavigationInstruction} from 'aurelia-router';
import {Config} from "../../services/config-dev";

@autoinject()
export class Dashboard {
    constructor(
        private _config:Config
    ) {
        console.log("Using config", this._config);
    }

    activate(
        params: any,
        routeConfig: ICustomRouteConfig,
        navInstruction: NavigationInstruction
    ) {
        console.log("activated", params, routeConfig);
    }
}
