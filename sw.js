// Changer ce numéro à chaque mise à jour importante force le rechargement de tous les fichiers.
const CACHE_NAME = 'ecm-v18';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './images/3e_lecon1.png',
  './images/3e_lecon10.png',
  './images/3e_lecon11.png',
  './images/3e_lecon2.png',
  './images/3e_lecon5.png',
  './images/3e_lecon7.png',
  './images/3e_lecon8.png',
  './images/3e_lecon9.png',
  './images/3e_meteo_togo.jpg',
  './images/3e_pyramide_normes.jpg',
  './images/3e_vote_elections.jpg',
  './images/4e_classification_drogues.jpg',
  './images/4e_lecon1.png',
  './images/4e_lecon10.png',
  './images/4e_lecon11.png',
  './images/4e_lecon13.png',
  './images/4e_lecon14.png',
  './images/4e_lecon2.png',
  './images/4e_lecon3.png',
  './images/4e_lecon4.png',
  './images/4e_lecon6.png',
  './images/4e_lecon7.png',
  './images/4e_lecon8.png',
  './images/4e_lecon9.png',
  './images/4e_mlk_discours.jpg',
  './images/4e_mlk_portrait.jpg',
  './images/4e_partis_politiques.jpg',
  './images/5e_armoiries.jpg',
  './images/5e_drapeau.jpg',
  './images/5e_lecon1.png',
  './images/5e_lecon11.png',
  './images/5e_lecon13.png',
  './images/5e_lecon15.png',
  './images/5e_lecon2.png',
  './images/5e_lecon3.png',
  './images/5e_lecon4.png',
  './images/5e_lecon5.png',
  './images/5e_lecon6.png',
  './images/5e_lecon7.png',
  './images/5e_lecon8.png',
  './images/5e_lecon9.png',
  './images/5e_pollution_auto.jpg',
  './images/5e_types_violence.jpg',
  './images/6e_lecon1.png',
  './images/6e_lecon10.png',
  './images/6e_lecon11.png',
  './images/6e_lecon12.png',
  './images/6e_lecon13.png',
  './images/6e_lecon14.png',
  './images/6e_lecon15.png',
  './images/6e_lecon16.png',
  './images/6e_lecon17.png',
  './images/6e_lecon2.png',
  './images/6e_lecon3.png',
  './images/6e_lecon4.png',
  './images/6e_lecon5.png',
  './images/6e_lecon6.png',
  './images/6e_lecon7.png',
  './images/6e_lecon8.png',
  './images/6e_lecon9.png',
  './images/int_3e_bureau_de_vote.jpg',
  './images/int_3e_quartier_inonde_lome.jpg',
  './images/int_3e_rue_inondee_lome.jpg',
  './images/int_4e_civil_rights_act_1964.jpg',
  './images/int_4e_dudh_eleanor_roosevelt.jpg',
  './images/int_4e_mlk_washington_1963.jpg',
  './images/int_5e_drapeau_togo.png',
  './images/int_5e_ordures_brulees.jpg'
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
