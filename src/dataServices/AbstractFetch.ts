export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

export type RestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const abstractFetch = async (method: RestMethod, url: string, body?: object | string, headers = {}) => {
    return await fetch(`/api${url}`, {
        method,
        headers: {
            'content-type': 'application/json',
            ...headers
        },
        credentials: 'same-origin',
        body: JSON.stringify(body),
    })
        .then(async (response) => {
            if (!response.ok) {
                const data = await response.json();
                throw Error(data.message);
            }
            if(response.status === 201) {
                return;
            }
            return response.json();
        });
};