// CACHING EXAMPLES AND NOTES

// Cache API-gives us caches objects on the global

// EXAMPLES:

caches.open('my-stuff').then(function(cache) {
  //...


});
// To CREATE or OPEN a cache and returns a PROMISE

// IMPORTANT: If I haven't opened a cache of that name('my-stuff') before, it
// creates one and returns it

// Cache box ('my-stuff') - contains both request and response pairs from
// any secure origin. Can use it to store fonts, scripts, images or anything
// from both our origin or elsewhere on the web

cache.put(request, response);
// Add cache items using cache.put and pass in a request or a URL and a
// response

cache.addAll([
  '/foo',
  '/bar'
]);
// Takes an array of requests or URLs, fetches them, and puts the
// request-response pairs into the cache

cache.match(request);
// To get something out of the cache with either passing it a request or URL
// This will return a promise for a matching response if one is found or null

caches.match(request);
// Same as cache.match but tries to find a match in any cache, starting with
// the oldest

QUIZ: CACHE RESPONSE QUIZ

1. Open/create a cache named 'wittr-static-v1'
2. Add array of urls name urlsToCache to 'wittr-static-v1'

Answer:

var urlsToCache = [
  '/',
  'js/main.js',
  'css/main.css',
  'imgs/icon.png',
  'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
  'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
    caches.open('wittr-static-v1').then(function(cache) {
      cache.addAll([
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});
