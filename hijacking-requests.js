

// Respond to all requests with an html response
self.addEventListener('fetch', function(event) {
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
    event.respondWith(
      new Response('Hello <b class="a-winner-is-me">you there</b>', {
        headers: {'Content-Type': 'text/html'}
      })
    );
});

// Fetch code for some JSON from URL foo with promises
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

// Response with fetching a gif image
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch('/imgs/dr-evil.gif')
  );
});

// How to respond to requests replacing all .jpg images with
// dr. evil gif using request.url and endswith()
self.addEventListener('fetch', function(event) {

  if (event.request.url.endsWith('.jpg')) {
      event.respondWith(
        fetch('/imgs/dr-evil.gif')
      );
    }
});

// Responding with a network fetch for the request, just like the browser would
// do, if we left it to its own devices. If URL is invalid you will get a new
// custom response(line 54) or if connection is down/no internet you will get
// another custom response(line 58)
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

// custom 404 response, using service worker to serve/respond with a dr-evil gif
// Solution:
// Rather than returning response, return fetch(#imagepath#)
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
