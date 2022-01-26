var cacheName = "appV1";
console.log(cacheName);
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/favicon.ico",
      ]);
    })
  );
});

// "/static/js/main.chunk.js",
// "/static/js/0.chunk.js",
// "/static/js/bundle.js",
// "/index.html",
// "/favicon.ico",
// "static/media/bg1.c2ac930e00661aef2357.jpg",
this.addEventListener("fetch", function (event) {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        console.log("result", result);
        if (result) {
          return result;
        }
        // let reqUrl = event.request.clone();
        // fetch(reqUrl);
      })
    );
  }
});
