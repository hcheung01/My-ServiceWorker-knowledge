EVENTS AND METHODS NOTES AND EXAMPLES

1. INSTALL EVENT

Example:
self.addEventListener(‘install’, function(event) {
  event.waitUntil(
	//.....
	);
});
// DEBUG:
When should we store our stuff with Service Worker.  We can use a new install event. Add a listener for the install event. We pass it a promise. If and when the promise resolves, the browser knows the install is complete. If the promise rejects, it knows the install failed, and this service worker should be discarded

Another way of putting it.....

When a browser runs a service worker for the first time an event is fired within it, the installed event. The browser will not let this new service worker take control of pages until its install phase is
completed, and we are in control of what that involves

IMPORTANT: We use it as an opportunity to get everything we need from the network


2. ACTIVATE EVENT

Example:
self.addEventListener(‘activate’, function(event) {
	//.....
});

New Activate event-to delete the old Service Worker and activate the new service worker. Unlike install event which fires when the browser sets up a new service worker for the first time. Activate event fires when this service worker becomes active, when it’s ready to control pages and the previous service worker is gone. It will get rid of old caches too.

3. WAIT UNTIL METHOD

Example:
SYNTAX: event.waitUntil(promise)
Parameters: A Promise
Return value: None

This method tells the event dispatcher that work is ongoing. It can also be used to detect whether that work was successful. In service workers, waitUntil() tells the browser that work is ongoing until the promise settles, and it should not terminate the service worker if it wants that work to complete.

You can use the method to signal the length of the process for both Activate and Install event.

The install events in service workers use waitUntil() to hold the service worker in the installing phase until tasks complete. If the promise passed to waitUntil() rejects, the install is considered a failure, and the installing service worker is discarded. This is primarily used to ensure that a service worker is not considered installed until all of the core caches it depends on are successfully populated.

The activate events in service workers use waitUntil() to buffer functional events such as fetch and push until the promise passed to waitUntil() settles. This gives the service worker time to update database schemas and delete outdated caches, so other events can rely on a completely upgraded state.

The waitUntil() method must be initially called within the event callback, but after that it can be called multiple times, until all the promises passed to it settle.

4. EVENT METHOD

Example:
SYNTAX: event.respondwith()

Method of FetchEvent. Prevents the browsers default fetch handling, and allows you to provide a promise for a Response yourself. Basically tell the browser we will handle it ourselve.

Can have two parameters. First parameter is the body of the response. The second parameter is an object which can also alter the headers of the page.

EXAMPLE:

self.addEventListener('fetch', function(event) {

    event.respondWith(
      new Response('<strong class="a-winner-is-me">My HTML response!</strong>', {
        headers: {'Content-Type': 'text/html'}
      })
    );
});
