!function(){"use strict";const e=1608115413612,t=`cache${e}`,n=["/client/client.fe890c92.js","/client/inject_styles.5607aec6.js","/client/index.7718b2c9.js","/client/index.36f36a4a.js","/client/index.0003bcc0.js","/client/index.02704f4e.js","/client/theme.690bca52.js","/client/index.a623f6de.js","/client/index.98d67fad.js","/client/index.917fccf5.js","/client/index.25b9fb92.js","/client/index.e82cf707.js","/client/index.43c5e439.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!s||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
