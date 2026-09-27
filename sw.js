// Changer ce numéro à chaque mise à jour importante force le rechargement de tous les fichiers.
const CACHE_NAME = 'ecm-v16';
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

// Réseau d'abord : avec une connexion, on reçoit toujours la dernière version des
// fiches (et on met la copie hors ligne à jour) ; sans connexion, on sert la copie.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    // cache: 'no-cache' : on revérifie toujours auprès de GitHub (qui demande sinon de garder
    // les fichiers 10 minutes), pour que les mises à jour arrivent tout de suite.
    fetch(event.request, { cache: 'no-cache' }).then(response => {
      if (response && response.status === 200 && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
