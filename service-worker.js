!function(){"use strict";const e=1608111681416,t=`cache${e}`,n=["/client/client.0abaf5b1.js","/client/inject_styles.5607aec6.js","/client/index.46001e45.js","/client/index.792e02e9.js","/client/index.bf34b52e.js","/client/theme.690bca52.js","/client/index.beba686f.js","/client/index.1c96a34f.js","/client/index.5a089b99.js","/client/index.aacb27ae.js","/client/index.28e8c30c.js","/client/index.bb7681c9.js","/client/index.27da7217.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!s||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
