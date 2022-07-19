const target = 'https://7640830.app.netsuite.com/app/login/oauth2/authorize.nl?'
const response_type = 'code'
const redirect_uri = 'https://localhost:3000/callback'
// const redirect_uri = 'https://api.github.com/callback'
// const redirect_uri = 'https%3A%2F%2Fapi.github.com'
// const redirect_uri = 'localhost:3000/callback?'
const scope = 'restlets'
const state = 'ykv2XLx1BpT5Q0F3MRPHb94j'
const client_id = import.meta.env.VITE_CLIENT_ID

export async function get(request) {

    return {
        status: 302,
        headers: {
            location: `${target}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&client_id=${client_id}`
        }
    };
}
