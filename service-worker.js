!function(){"use strict";const e=1608160893333,t=`cache${e}`,n=["/client/client.cc09f684.js","/client/inject_styles.5607aec6.js","/client/index.13db2a19.js","/client/theme.690bca52.js","/client/index.d5f5e9d7.js","/client/index.1c14b5c1.js","/client/index.c21393e6.js","/client/index.cea8049f.js","/client/index.f3482ffc.js","/client/index.ce497b2f.js","/client/index.39a6d746.js","/client/index.63e027a8.js","/client/index.9b949d83.js","/client/index.007c232e.js","/client/index.03b814d5.js","/client/index.0c69353f.js","/client/index.06a9bd54.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!s||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
