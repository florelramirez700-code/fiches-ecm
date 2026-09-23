const CACHE_NAME = 'ecm-v1';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './images/6e_grille_imc.jpg',
  './images/6e_parterre.jpg',
  './images/5e_drapeau.jpg',
  './images/5e_armoiries.jpg',
  './images/5e_types_violence.jpg',
  './images/5e_pollution_auto.jpg',
  './images/4e_partis_politiques.jpg',
  './images/4e_classification_drogues.jpg',
  './images/4e_mlk_discours.jpg',
  './images/4e_mlk_portrait.jpg',
  './images/3e_pyramide_normes.jpg',
  './images/3e_vote_elections.jpg',
  './images/3e_meteo_togo.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
