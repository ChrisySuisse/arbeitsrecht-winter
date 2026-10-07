const ALLOWED_ORIGIN = "https://chrisysuisse.github.io";

function getCookie(request, name) {
  const cookieHeader = request.headers.get("cookie") || "";

  for (const cookie of cookieHeader.split(";")) {
    const [key, ...valueParts] = cookie.trim().split("=");

    if (key === name) {
      return decodeURIComponent(valueParts.join("="));
    }
  }

  return null;
}

export default async (request) => {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = getCookie(request, "oauth_state");

  if (!code) {
    return new Response("Missing OAuth code", { status: 400 });
  }

  if (!state || !expectedState || state !== expectedState) {
    return new Response("Invalid OAuth state", { status: 403 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response("Missing GitHub OAuth configuration", {
      status: 500,
    });
  }

  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    }
  );

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData.access_token) {
    return new Response("GitHub token exchange failed", {
      status: 500,
    });
  }

  const message =
    `authorization:github:success:${JSON.stringify({
      token: tokenData.access_token,
      provider: "github",
    })}`;

  // Prevent accidental HTML/script injection.
  const safeMessage = JSON.stringify(message).replace(/</g, "\\u003c");

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>GitHub Authorization</title>
</head>
<body>
  <p>Authorization successful.</p>

  <script>
    (function () {
      const allowedOrigin = ${JSON.stringify(ALLOWED_ORIGIN)};

      function receiveMessage(event) {
        if (
          event.origin !== allowedOrigin ||
          event.source !== window.opener ||
          event.data !== "authorizing:github"
        ) {
          return;
        }

        window.opener.postMessage(
          ${safeMessage},
          allowedOrigin
        );

        window.close();
      }

      window.addEventListener("message", receiveMessage, false);

      if (window.opener) {
        window.opener.postMessage(
          "authorizing:github",
          allowedOrigin
        );
      }
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Set-Cookie":
        "oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
    },
  });
};