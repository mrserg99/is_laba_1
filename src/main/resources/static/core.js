/*
* header example
* {
*  'Content-Type': 'application/json;charset=utf-8'
* }
*
*/
async function getRequest(url, header, body) {
    return fetch(url, {
        method: 'GET',
        headers: header,
        body: body
    })
}

async function postRequest(url, header, body) {
    return await fetch(url, {
        method: 'POST',
        headers: header,
        body: body
    })
}

async function deleteRequest(url, header, body) {
    return await fetch(url, {
        method: 'DELETE',
        headers: header,
        body: body
    })
}

async function putRequest(url, header, body) {
    return await fetch(url, {
        method: 'PUT',
        headers: header,
        body: body
    })
}

function base64ToBytes(base64) {
    const binString = atob(base64);
    const text = Uint8Array.from(binString, (m) => m.codePointAt(0));
    return new TextDecoder().decode(text)
}

function textToBase64(text) {
    const bytes = new TextEncoder().encode(text)
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}