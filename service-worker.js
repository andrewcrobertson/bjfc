!function(){"use strict";const e=1612593755932,n=`cache${e}`,t=["/client/client.b61fbb49.js","/client/inject_styles.5607aec6.js","/client/index.00ac2f64.js","/client/trimEnd.964240f7.js","/client/index.4cdbefd6.js","/client/index.a9cc7c64.js","/client/index.8c6b7d71.js","/client/theme.1302b6c6.js","/client/join.22ae3f0e.js","/client/index.de5cd169.js","/client/index.befcd4c4.js","/client/index.fed45c8c.js","/client/index.e0b59923.js","/client/index.0e4789a3.js","/client/index.e79fad0f.js","/client/index.53a1f36c.js","/client/index.04a5ae60.js","/client/index.dedd8e2c.js","/client/index.bbb852d0.js","/client/index.41d0215a.js","/client/index.ac74fe16.js","/client/index.98c389dc.js","/client/index.c9d0162f.js","/client/index.3362563b.js","/client/index.daa3001c.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/pdfs/U08M.pdf","/pdfs/U09M.pdf","/pdfs/U10M.pdf","/pdfs/U11M.pdf","/pdfs/U12B.pdf","/pdfs/U12G.pdf","/pdfs/U14B.pdf","/pdfs/U14G.pdf","/pdfs/U16G.pdf","/pdfs/U17B-GOLD.pdf","/pdfs/U17B-GREEN.pdf","/pdfs/U18G.pdf"]),c=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(n).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==n&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(n=>{if("GET"!==n.request.method||n.request.headers.has("range"))return;const t=new URL(n.request.url),s=t.protocol.startsWith("http"),i=t.hostname===self.location.hostname&&t.port!==self.location.port,d=t.host===self.location.host&&c.has(t.pathname),a="only-if-cached"===n.request.cache&&!d;!s||i||a||n.respondWith((async()=>d&&await caches.match(n.request)||async function(n){const t=await caches.open(`offline${e}`);try{const e=await fetch(n);return t.put(n,e.clone()),e}catch(e){const c=await t.match(n);if(c)return c;throw e}}(n.request))())}))}();
