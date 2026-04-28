const url = new URL(window.location.href);
url.searchParams.set('cache_bust', Date.now().toString());
window.location.replace(url.toString());
