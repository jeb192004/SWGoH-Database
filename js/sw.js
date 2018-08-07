
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('swgoh').then(function(cache) {
     return cache.addAll([
	 	'index.html',
		'scripts.js'
 		
		
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});



