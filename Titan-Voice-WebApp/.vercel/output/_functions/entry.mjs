import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_vsxVV2VX.mjs';
import { manifest } from './manifest_CBtWZDnA.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-contact.astro.mjs');
const _page2 = () => import('./pages/api/send-quote.astro.mjs');
const _page3 = () => import('./pages/api/send-support.astro.mjs');
const _page4 = () => import('./pages/promo.astro.mjs');
const _page5 = () => import('./pages/support.astro.mjs');
const _page6 = () => import('./pages/website.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-contact.ts", _page1],
    ["src/pages/api/send-quote.ts", _page2],
    ["src/pages/api/send-support.ts", _page3],
    ["src/pages/promo.astro", _page4],
    ["src/pages/support.astro", _page5],
    ["src/pages/website.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "449f6c02-abd4-42fd-9132-332f8b9ccfa6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
