!function(){"use strict";const t=1624072638108,c=`cache${t}`,e=["/client/client.6fcbeccd.js","/client/inject_styles.5607aec6.js","/client/index.30c01add.js","/client/trimEnd.c5abf82f.js","/client/index.96fbecd3.js","/client/index.a9cc7c64.js","/client/index.b35e8bfd.js","/client/theme.0d06ef4e.js","/client/join.22ae3f0e.js","/client/index.0248a050.js","/client/index.f338572a.js","/client/index.e4279de0.js","/client/index.1fe13edb.js","/client/index.dee879b6.js","/client/index.68e998b1.js","/client/index.def60072.js","/client/index.72d94517.js","/client/index.0af926a3.js","/client/index.04f8d674.js","/client/index.63d4f6a8.js","/client/index.a6a4366a.js","/client/index.686660d8.js","/client/index.b4479c79.js","/client/index.153be4a7.js","/client/index.e5e0c89d.js"].concat(["/service-worker-index.html","/contact/U08M.pdf","/contact/U08M.xlsx","/contact/U08M.xml","/contact/U09M.pdf","/contact/U09M.xlsx","/contact/U09M.xml","/contact/U10M.pdf","/contact/U10M.xlsx","/contact/U10M.xml","/contact/U11M.pdf","/contact/U11M.xlsx","/contact/U11M.xml","/contact/U12B.pdf","/contact/U12B.xlsx","/contact/U12B.xml","/contact/U12G.pdf","/contact/U12G.xlsx","/contact/U12G.xml","/contact/U14B.pdf","/contact/U14B.xlsx","/contact/U14B.xml","/contact/U14G.pdf","/contact/U14G.xlsx","/contact/U14G.xml","/contact/U16G.pdf","/contact/U16G.xlsx","/contact/U16G.xml","/contact/U17B-GOLD.pdf","/contact/U17B-GOLD.xlsx","/contact/U17B-GOLD.xml","/contact/U17B-GREEN.pdf","/contact/U17B-GREEN.xlsx","/contact/U17B-GREEN.xml","/contact/U18G.pdf","/contact/U18G.xlsx","/contact/U18G.xml","/css/tailwind.min.css","/email/U08M.txt","/email/U09M.txt","/email/U10M.txt","/email/U11M.txt","/email/U12B.txt","/email/U12G.txt","/email/U14B.txt","/email/U14G.txt","/email/U16G.txt","/email/U17B-GOLD.txt","/email/U17B-GREEN.txt","/email/U18G.txt","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(e);self.addEventListener("install",(t=>{t.waitUntil(caches.open(c).then((t=>t.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const e of t)e!==c&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(c=>{if("GET"!==c.request.method||c.request.headers.has("range"))return;const e=new URL(c.request.url),a=e.protocol.startsWith("http"),i=e.hostname===self.location.hostname&&e.port!==self.location.port,s=e.host===self.location.host&&n.has(e.pathname),l="only-if-cached"===c.request.cache&&!s;!a||i||l||c.respondWith((async()=>s&&await caches.match(c.request)||async function(c){const e=await caches.open(`offline${t}`);try{const t=await fetch(c);return e.put(c,t.clone()),t}catch(t){const n=await e.match(c);if(n)return n;throw t}}(c.request))())}))}();
