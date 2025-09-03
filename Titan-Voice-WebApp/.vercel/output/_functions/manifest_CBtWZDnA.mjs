import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_B4yAR87f.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CkGPCo4h.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/","cacheDir":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/node_modules/.astro/","outDir":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/dist/","srcDir":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/","publicDir":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/public/","buildClientDir":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/dist/client/","buildServerDir":"file:///C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"promo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/promo","isIndex":false,"type":"page","pattern":"^\\/promo\\/?$","segments":[[{"content":"promo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/promo.astro","pathname":"/promo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"support/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/support","isIndex":false,"type":"page","pattern":"^\\/support\\/?$","segments":[[{"content":"support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support.astro","pathname":"/support","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"website/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/website","isIndex":false,"type":"page","pattern":"^\\/website\\/?$","segments":[[{"content":"website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/website.astro","pathname":"/website","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-contact.ts","pathname":"/api/send-contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-quote","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-quote\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-quote.ts","pathname":"/api/send-quote","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-support","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-support\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-support.ts","pathname":"/api/send-support","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/pages/promo.astro",{"propagation":"none","containsHead":true}],["C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/pages/support.astro",{"propagation":"none","containsHead":true}],["C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/pages/website.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/send-contact@_@ts":"pages/api/send-contact.astro.mjs","\u0000@astro-page:src/pages/api/send-quote@_@ts":"pages/api/send-quote.astro.mjs","\u0000@astro-page:src/pages/api/send-support@_@ts":"pages/api/send-support.astro.mjs","\u0000@astro-page:src/pages/promo@_@astro":"pages/promo.astro.mjs","\u0000@astro-page:src/pages/support@_@astro":"pages/support.astro.mjs","\u0000@astro-page:src/pages/website@_@astro":"pages/website.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CBtWZDnA.mjs","C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DZNk64UT.mjs","C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/components/PromoPage":"_astro/PromoPage.CyKupngO.js","C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/components/MainLayout.tsx":"_astro/MainLayout.BOfR-7xd.js","C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/components/SupportPage":"_astro/SupportPage.CQpP3WQN.js","C:/Users/vandr/OneDrive/Desktop/Titan-Voice-WebApp/Titan-Voice-WebApp/src/components/LandingPage":"_astro/LandingPage.sJjpZ9vj.js","@astrojs/solid-js/client.js":"_astro/client.Bn-F2g_O.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.B0zhSHa9.png","/_astro/titan-1.DK9HH7BX.png","/_astro/titan-2.BeLaZeZH.mp4","/_astro/index.BxN5v6Xy.css","/favicon.svg","/_astro/client.Bn-F2g_O.js","/_astro/LandingPage.sJjpZ9vj.js","/_astro/logo.CyUcXBDB.js","/_astro/MainLayout.BOfR-7xd.js","/_astro/PromoPage.CyKupngO.js","/_astro/SupportPage.CQpP3WQN.js","/_astro/web.-AMACwUu.js","/promo/index.html","/support/index.html","/website/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"0ae8WjvDy1c7EDVAcDAmD0LCjSgq6zGoX8aX01Z++9I="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
