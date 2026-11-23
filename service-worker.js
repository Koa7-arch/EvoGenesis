const CACHE='evogenesis-v03-1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./menagerie.css','./menagerie.js','./assets/preserve.webp','./assets/wolf.webp','./assets/valley.webp'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('evogenesis-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return response}).catch(()=>caches.match(e.request)))});
