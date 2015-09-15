/// <reference path="./router5.d.ts" />

declare namespace Router5React {
  interface ISegmentMixin {
    nodeListener(toState: string, fromState: string): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
  }

  type FListener = (toState: string, fromState: string) => void;
  type FSegmentMixin = (routeName: string, listener: FListener) => ISegmentMixin;
  type FLinkFactory = (router: Router5.Router5) => any;
  type FSegmentMixinFactory = (router: Router5.Router5) => FSegmentMixin;

  export const linkFactory: FLinkFactory;
  export const segmentMixinFactory: FSegmentMixinFactory;
}

declare module 'router5-react' {
  export = Router5React;
}
