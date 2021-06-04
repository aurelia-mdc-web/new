import { RouteConfig } from 'aurelia-router';

export interface ICustomRouteConfig extends RouteConfig {
    settings?: {
        count?: number,
    }
}
