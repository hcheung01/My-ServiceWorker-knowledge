

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
  // TODO: only respond to requests with a
  // url ending in ".jpg"

  if (event.request.url.endsWith('.jpg')) {
      event.respondWith(
        fetch('/imgs/dr-evil.gif')
      );
    }
});
