export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

export type RestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const abstractFetch = async (method: RestMethod, url: string, body?: object, headers = {}) => {
    return await fetch(`/api${url}`, {
        method,
        headers: {
            'content-type': 'application/json',
            ...headers
        },
        credentials: 'same-origin',
        body: JSON.stringify(body),
    })
        .then(response => {
            if (!response.ok) {
                throw Error(JSON.stringify(response.body));
            }
            return response.json();
        });
};