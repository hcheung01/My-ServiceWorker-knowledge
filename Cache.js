// CACHING EXAMPLES AND NOTES

// Cache API-gives us caches objects on the global

// EXAMPLES:

caches.open('my-stuff').then(function(cache) {
  //...


});
// To CREATE or OPEN a cache of that name and returns a PROMISE

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
