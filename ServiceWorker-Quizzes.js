QUIZZES AND ANSWERS:

1. Respond to all requests with an html response

self.addEventListener('fetch', function(event) {
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
    event.respondWith(
      new Response('Hello <b class="a-winner-is-me">you there</b>', {
        headers: {'Content-Type': 'text/html'}
      })
    );
});

2. Fetch code for some JSON from URL foo with promises

fetch('/foo').then(function(response) {
  // to read the JSON response
  return response.json()
  // if not successful .then
}).then(function(data) {
  console.log(data);
  // catch errors from either the requests or reading the response
}).catch(function() {
  console.log('It failed boooooo you need to read more');
})

3. Response with fetching a gif image

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch('/imgs/dr-evil.gif')
  );
});

4. Respond to requests replacing all .jpg images with
   dr. evil gif using request.url and endswith()

self.addEventListener('fetch', function(event) {

  if (event.request.url.endsWith('.jpg')) {
      event.respondWith(
        fetch('/imgs/dr-evil.gif')
      );
    }
});

5. Responding with a network fetch for the request, just like the browser would do, if we left it to its own devices. If URL is invalid you will get a new custom response(line 57) or if connection is down/no internet you will get another custom response(line 61)

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if (response.status === 404) {
        // TODO: instead, respond with the gif at
        // /imgs/dr-evil.gif
        // using a network request
        return new Response("No content dude version 5");
      }
      return response;
    }).catch(function() {
      return new Response("You are offline, so I am taking over");
    })
  );
});

6. custom 404 response, using service worker to serve/respond with a dr-evil gif

Solution:
Rather than returning response, return fetch(#imagepath#)

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if (response.status === 404) {
        // TODO: instead, respond with the gif at
        // /imgs/dr-evil.gif
        // using a network request
        // return new Response("Whoops, not found");
        return fetch('/imgs/dr-evil.gif');
      }
      return response;
    }).catch(function() {
      return new Response("Uh oh, that totally failed!");
    })
  );
});

7. Install and Cache

-Open/create a cache named 'wittr-static-v1'
-Add array of urls name urlsToCache to 'wittr-static-v1'

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
      return cache.addAll([
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

8. 
