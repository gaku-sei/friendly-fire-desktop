import {Router5} from 'router5';
import {linkFactory, segmentMixinFactory} from 'router5-react';

export const router = new Router5()
  .setOption('useHash', false)
  .setOption('defaultRouter', 'home')
  .addNode('home', '/')
  .addNode('test', '/test');

export const Link = linkFactory(router);

export const SegmentMixin = segmentMixinFactory(router);
