declare namespace Router5 {
  interface RouteNode {
    name: string;
    path: string;
    childRoutes: Array<RouteNode>;
  }

  interface IOptions {
    useHash: boolean;
    hashPrefix: string;
    defaultRoute: string;
    defaultParams: {};
    base: string;
    trailingSlash: boolean;
  }

  type FCanActivate = (toState: string, fromState: string) => boolean;

  export class Router5 {
    new(routes: RouteNode | Array<RouteNode>, opts?: IOptions): Router5;
    setOption<T>(opt: string, val: T): Router5;
    add(routes: RouteNode | Array<RouteNode>): Router5;
    addNode(name: string, path: string, canActivate?: FCanActivate): Router5;
  }
}

declare module 'router5' {
  export = Router5;
}
