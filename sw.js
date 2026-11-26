const C="school-academy-v6";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.allSettled(["index.html","data.js","icon-192.png"].map(u=>c.add(u)))));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
e.respondWith(fetch(e.request).then(r=>{if(r&&r.status===200&&r.type==="basic"){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match("index.html"))))});
