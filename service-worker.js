!function(){"use strict";const e=1608155081897,t=`cache${e}`,n=["/client/client.5d5a8490.js","/client/inject_styles.5607aec6.js","/client/index.8e20abf3.js","/client/theme.690bca52.js","/client/index.b985e22f.js","/client/index.dcf23580.js","/client/index.eb7bbcb3.js","/client/index.b0801693.js","/client/index.6dddf487.js","/client/index.ac64e5f1.js","/client/index.e93eb2e6.js","/client/index.4e0c1c6f.js","/client/index.24f456c0.js","/client/index.8e8a1b8b.js","/client/index.da1d71de.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!s||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
