import {autoinject} from "aurelia-framework";
import {ICustomRouteConfig} from "../../models/navigation";
import {NavigationInstruction} from 'aurelia-router';

@autoinject()
export class Dashboard {
    activate(
        params: any,
        routeConfig: ICustomRouteConfig,
        navInstruction: NavigationInstruction
    ) {
        console.log("activated", params, routeConfig);
    }
}
