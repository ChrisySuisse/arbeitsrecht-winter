export default async () => {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response("Missing GITHUB_CLIENT_ID", {
      status: 500,
    });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    scope: "repo",
  });

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`,
    302
  );
};