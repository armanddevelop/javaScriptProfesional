// const resources = [
//   "/",
//   "/index.html",
//   "/assets/index.js",
//   "/assets/MediaPlayer.js",
//   "/assets/plugins/AutoPlay.js",
//   "/assets/plugins/AutoPause.ts",
//   "/assets/index.css",
//   "/assets/BigBuckBunny.mp4",
// ];
const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event && event.request;
  const method = event && event.request && event.request.method;
  //get
  if (method !== "GET") return;
  //buscar en cache
  event.respondWith(cachedResponse(request));

  //actualizar cache
  event.waitUntil(updateCache(request));
});

async function cachedResponse(request) {
  try {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
  } catch (error) {
    console.error("[cachedResponseError] ", error);
  }
}

async function updateCache(request) {
  try {
    const cache = await caches.open(VERSION);
    const response = await fetch(request, { cache: "no-store" });
    return cache.put(request, response);
  } catch (error) {
    console.error("[updateCacheError] ", error);
  }
}

async function precache() {
  try {
    const cache = await caches.open(VERSION);
    return cache.addAll([]);
  } catch (error) {
    console.error("[precacheError]: ", error);
  }
}
