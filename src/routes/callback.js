import fetch from 'node-fetch'


const token_url = 'https://7640830.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token'
const restlet_url = 'https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=755&deploy=1&record_type=employee&record_id=-5'
const redirect_uri = 'https://localhost:3000/callback'
// const redirect_uri = 'https://api.github.com/callback'
// const redirect_uri = 'localhost:3000/callback?'
const client_id = import.meta.env.VITE_CLIENT_ID
const client_secret = import.meta.env.VITE_CLIENT_SECRET


export async function get(request) {

    const code = request.url.searchParams.get('code');
    // get refreshToken
    const refresh_token = await getRefreshToken(code)
    // get accessToken
    const access_token = await getAccessToken(refresh_token)
    // const user = await getEmployeeInfo(access_token)

    request.locals.access_token = access_token

    const headers_list = new Headers()
    headers_list.append('location', '/welcome')
    headers_list.append('set-cookie', `access_token=${access_token || ''}; path=/; HttpOnly`)
    headers_list.append('set-cookie', `token_expiration=${getExpirationTime() || ''}; path=/; HttpOnly`)

    return {
        status: 302,
        headers: headers_list
    }

    // return {
    //     status: 302,
    //     headers: {
    //         location: "/welcome",
    //         'set-cookie': [`access_token=${access_token || ''}; path=/; HttpOnly`]
    //     }
    // }
}

function getRefreshToken(code) {

    return fetch(token_url, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`),
            'Content-Type': 'application/x-www-form-urlencoded'
            // Accept: 'application/json'
        },
        body: new URLSearchParams({
            'code': code,
            'redirect_uri': redirect_uri,
            'grant_type': 'authorization_code'
        })
    }).then(r => r.json())
      .then(r => r.refresh_token)
}

function getAccessToken(refresh_token) {
    return fetch(token_url, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`),
            'Content-Type': 'application/x-www-form-urlencoded'
            // Accept: 'application/json'
        },
        body: new URLSearchParams({
            'refresh_token': refresh_token,
            'redirect_uri': redirect_uri,
            'grant_type': 'refresh_token'
        })
    }).then(r => r.json())
        .then(r => r.access_token)
}

function getEmployeeInfo(bearer_token) {
    return fetch(restlet_url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${bearer_token}`
        }
    }).then(r => r.json())
}

function getExpirationTime() {
    const date = new Date()
    let time = date.getTime() + 3600
    return time
}