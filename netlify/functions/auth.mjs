export default async () => {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response("Missing GITHUB_CLIENT_ID", { status: 500 });
  }

  const state = crypto.randomUUID();

  const params = new URLSearchParams({
    client_id: clientId,
    scope: "public_repo",
    state,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
      "Set-Cookie":
        `oauth_state=${encodeURIComponent(state)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
      "Cache-Control": "no-store",
    },
  });
};