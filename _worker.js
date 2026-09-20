export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Meta's domain-verification crawler needs these EXACT .html URLs to return
    // 200 directly — it does not follow redirects. Cloudflare Pages normally
    // auto-redirects any *.html URL to its extension-less form, which breaks
    // that. So for these paths only, serve the token directly and skip the
    // platform's automatic redirect.
    const META_TOKENS = {
      "/9htbdpz02clz0ubmy6iogg7ftfg5an.html": "9htbdpz02clz0ubmy6iogg7ftfg5an",
      "/80j74nbzoowgzzw4iz0x56ndeceoz4.html": "80j74nbzoowgzzw4iz0x56ndeceoz4",
    };

    const token = META_TOKENS[url.pathname];
    if (token) {
      return new Response(token, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // Everything else: normal static-site behavior, unchanged.
    return env.ASSETS.fetch(request);
  },
};
