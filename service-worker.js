!function(){"use strict";const t=1616711709340,c=`cache${t}`,e=["/client/client.31d30a37.js","/client/inject_styles.5607aec6.js","/client/index.18e2fe0a.js","/client/trimEnd.a53edb35.js","/client/index.813df10d.js","/client/index.a9cc7c64.js","/client/index.23f0b94c.js","/client/theme.3fc164e9.js","/client/join.22ae3f0e.js","/client/index.7475ca82.js","/client/index.1884c841.js","/client/index.51377d7f.js","/client/index.f8d218a9.js","/client/index.d2162842.js","/client/index.6e7b14cf.js","/client/index.b3413d6e.js","/client/index.573bbdf4.js","/client/index.a6926f30.js","/client/index.b784b368.js","/client/index.c0ae0185.js","/client/index.883fa1b4.js","/client/index.184cac89.js","/client/index.e310ca62.js","/client/index.2481af47.js","/client/index.a97b3764.js"].concat(["/service-worker-index.html","/contact/U08M.pdf","/contact/U08M.xlsx","/contact/U08M.xml","/contact/U09M.pdf","/contact/U09M.xlsx","/contact/U09M.xml","/contact/U10M.pdf","/contact/U10M.xlsx","/contact/U10M.xml","/contact/U11M.pdf","/contact/U11M.xlsx","/contact/U11M.xml","/contact/U12B.pdf","/contact/U12B.xlsx","/contact/U12B.xml","/contact/U12G.pdf","/contact/U12G.xlsx","/contact/U12G.xml","/contact/U14B.pdf","/contact/U14B.xlsx","/contact/U14B.xml","/contact/U14G.pdf","/contact/U14G.xlsx","/contact/U14G.xml","/contact/U16G.pdf","/contact/U16G.xlsx","/contact/U16G.xml","/contact/U17B-GOLD.pdf","/contact/U17B-GOLD.xlsx","/contact/U17B-GOLD.xml","/contact/U17B-GREEN.pdf","/contact/U17B-GREEN.xlsx","/contact/U17B-GREEN.xml","/contact/U18G.pdf","/contact/U18G.xlsx","/contact/U18G.xml","/css/tailwind.min.css","/email/U08M.txt","/email/U09M.txt","/email/U10M.txt","/email/U11M.txt","/email/U12B.txt","/email/U12G.txt","/email/U14B.txt","/email/U14G.txt","/email/U16G.txt","/email/U17B-GOLD.txt","/email/U17B-GREEN.txt","/email/U18G.txt","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(e);self.addEventListener("install",(t=>{t.waitUntil(caches.open(c).then((t=>t.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const e of t)e!==c&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(c=>{if("GET"!==c.request.method||c.request.headers.has("range"))return;const e=new URL(c.request.url),a=e.protocol.startsWith("http"),i=e.hostname===self.location.hostname&&e.port!==self.location.port,s=e.host===self.location.host&&n.has(e.pathname),l="only-if-cached"===c.request.cache&&!s;!a||i||l||c.respondWith((async()=>s&&await caches.match(c.request)||async function(c){const e=await caches.open(`offline${t}`);try{const t=await fetch(c);return e.put(c,t.clone()),t}catch(t){const n=await e.match(c);if(n)return n;throw t}}(c.request))())}))}();
