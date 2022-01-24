var cacheDatas = "appV1";

this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheDatas).then(function (cache) {
      return cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "https://opentdb.com/api.php?amount=10",
        "/about",
        "/",
        "/favicon.ico",
      ]);
    })
  );
});

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
