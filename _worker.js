export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Meta's domain-verification crawler needs this EXACT .html URL to return
    // 200 directly — it does not follow redirects. Cloudflare Pages normally
    // auto-redirects any *.html URL to its extension-less form, which breaks
    // that. So for this one path only, serve the static asset directly and
    // skip the platform's automatic redirect.
    if (url.pathname === "/9htbdpz02clz0ubmy6iogg7ftfg5an.html") {
      return new Response("9htbdpz02clz0ubmy6iogg7ftfg5an", {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // Everything else: normal static-site behavior, unchanged.
    return env.ASSETS.fetch(request);
  },
};
