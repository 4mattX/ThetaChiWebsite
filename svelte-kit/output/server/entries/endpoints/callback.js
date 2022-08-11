import fetch from "node-fetch";
const token_url = "https://7640830.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token";
const redirect_uri = "https://localhost:3000/callback";
const client_id = "064c1116cf84b2a1345ee88782ffa7921a15d845d51bd58a707ede27a326ba4c";
const client_secret = "a282795242084650ce4a6e94c64c8160d077fe0c1bf000e5b71d2f2897bfd557";
async function get(request) {
  const code = request.url.searchParams.get("code");
  const refresh_token = await getRefreshToken(code);
  const access_token = await getAccessToken(refresh_token);
  request.locals.access_token = access_token;
  const headers_list = new Headers();
  headers_list.append("location", "/welcome");
  headers_list.append("set-cookie", `access_token=${access_token || ""}; path=/; HttpOnly`);
  headers_list.append("set-cookie", `token_expiration=${getExpirationTime() || ""}; path=/; HttpOnly`);
  return {
    status: 302,
    headers: headers_list
  };
}
function getRefreshToken(code) {
  return fetch(token_url, {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(`${client_id}:${client_secret}`),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      "code": code,
      "redirect_uri": redirect_uri,
      "grant_type": "authorization_code"
    })
  }).then((r) => r.json()).then((r) => r.refresh_token);
}
function getAccessToken(refresh_token) {
  return fetch(token_url, {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(`${client_id}:${client_secret}`),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      "refresh_token": refresh_token,
      "redirect_uri": redirect_uri,
      "grant_type": "refresh_token"
    })
  }).then((r) => r.json()).then((r) => r.access_token);
}
function getExpirationTime() {
  const date = new Date();
  let time = date.getTime() + 3600;
  return time;
}
export { get };
