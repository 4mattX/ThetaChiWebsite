import * as cookie from 'cookie'

export async function handle({event, resolve}) {

    const cookies = cookie.parse(event.request.headers.get("cookie") || "")
    event.locals.access_token = cookies.access_token
    event.locals.token_expiration = cookies.token_expiration
    event.locals.scanned_item = cookies.scanned_item

    const response = await resolve(event);
    response.headers['set-cookie'] = `access_token=${event.locals.access_token || ''}; path=/; HttpOnly`
    response.headers['set-cookie'] = `token_expiration=${event.locals.token_expiration || ''}; path=/; HttpOnly`
    response.headers['set-cookie'] = `scanned_item=${event.locals.scanned_item || ''}; path=/; HttpOnly`

    return response
}

export async function getSession(request) {
    return {
        token_expiration: request.locals.token_expiration,
        access_token: request.locals.access_token,
        scanned_item: request.locals.scanned_item,
    }
}