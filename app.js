// BTX - app.js
document.addEventListener("DOMContentLoaded", () => {
  // Service Worker (offline e performance). Nada disso aparece no site.
  if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
});
