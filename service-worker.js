!function(){"use strict";const e=1614384911880,t=`cache${e}`,n=["/client/client.b61fbb49.js","/client/inject_styles.5607aec6.js","/client/index.00ac2f64.js","/client/trimEnd.964240f7.js","/client/index.4cdbefd6.js","/client/index.a9cc7c64.js","/client/index.8c6b7d71.js","/client/theme.1302b6c6.js","/client/join.22ae3f0e.js","/client/index.de5cd169.js","/client/index.befcd4c4.js","/client/index.fed45c8c.js","/client/index.e0b59923.js","/client/index.0e4789a3.js","/client/index.e79fad0f.js","/client/index.53a1f36c.js","/client/index.04a5ae60.js","/client/index.dedd8e2c.js","/client/index.bbb852d0.js","/client/index.41d0215a.js","/client/index.ac74fe16.js","/client/index.98c389dc.js","/client/index.c9d0162f.js","/client/index.3362563b.js","/client/index.daa3001c.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/email/U08M.txt","/email/U09M.txt","/email/U10M.txt","/email/U11M.txt","/email/U12B.txt","/email/U12G.txt","/email/U14B.txt","/email/U14G.txt","/email/U16G.txt","/email/U17B-GOLD.txt","/email/U17B-GREEN.txt","/email/U18G.txt","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/pdfs/U08M.pdf","/pdfs/U09M.pdf","/pdfs/U10M.pdf","/pdfs/U11M.pdf","/pdfs/U12B.pdf","/pdfs/U12G.pdf","/pdfs/U14B.pdf","/pdfs/U14G.pdf","/pdfs/U16G.pdf","/pdfs/U17B-GOLD.pdf","/pdfs/U17B-GREEN.pdf","/pdfs/U18G.pdf"]),i=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),s=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&i.has(n.pathname),d="only-if-cached"===t.request.cache&&!a;!c||s||d||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const i=await n.match(t);if(i)return i;throw e}}(t.request))())}))}();
