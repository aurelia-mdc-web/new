import {autoinject, PLATFORM} from "aurelia-framework";
import {NavModel, Router, RouterConfiguration} from 'aurelia-router';
import {MdcDrawer} from "@aurelia-mdc-web/drawer";
import "./app.scss"

@autoinject()
export class App {
    private _router: Router;
    private _drawer:MdcDrawer;
    private _routeConfig: RouterConfiguration;

    constructor() {
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        router.title = "My Title";
        this._router = router;
        this._routeConfig = config;
        config.map([
            {
                route: '',
                moduleId: PLATFORM.moduleName('components/dashboard/dashboard'),
                nav: true,
                name: "dashboard",
                title: 'Dashboard',
                settings: {
                    count: 2
                }
            },
        ]);
    }

    navigateTo(nav:NavModel|string) {
        if (nav instanceof NavModel) {
            this._router.navigate(nav.href);
        } else {
            this._router.navigateToRoute(nav);
        }
        this._drawer.open = false;
    }
}


