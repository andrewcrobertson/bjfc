!function(){"use strict";const e=1608011558702,t=`cache${e}`,n=["/client/client.7401491e.js","/client/inject_styles.5607aec6.js","/client/index.fc56cd5f.js","/client/index.8c4bb571.js","/client/index.8ff77078.js","/client/theme.690bca52.js","/client/index.1fe17519.js","/client/index.d61ca7b7.js","/client/index.4eb38b2c.js","/client/index.f3bbed1f.js","/client/index.d07cb572.js","/client/index.c9962f55.js","/client/index.a6ddf145.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!s||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
