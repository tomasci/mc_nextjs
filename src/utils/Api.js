import {lsGetItem, lsTokenParam} from "./LocalStorage";

const apiUrl = "http://192.168.1.157:3000"

function makeApiUrl(path = '/', params = {}) {
	let url = new URL(apiUrl + (path.startsWith('/') ? path : '/' + path))
	url.search = new URLSearchParams(params).toString()
	return url.toString()
}

function makeAuthorizationHeader() {
	return ['Bearer', lsGetItem(lsTokenParam)].join(' ')
}

export async function fetchGet(path = '/', params = {}, auth = false) {
	if (auth) {
		return await fetch(makeApiUrl(path, params), {
			headers: {
				'Authorization': makeAuthorizationHeader()
			}
		})
	} else {
		return await fetch(makeApiUrl(path, params))
	}
}

export function fetchPost(path = '/', body = {}, params = {}, auth = false) {
	if (auth) {
		return fetch(makeApiUrl(path, params), {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': makeAuthorizationHeader()
			}
		})
	} else {
		return fetch(makeApiUrl(path, params), {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
	}
}

export function fetchPut(path = '/', body = {}, params = {}, auth = false) {
	if (auth) {
		return fetch(makeApiUrl(path, params), {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': makeAuthorizationHeader()
			}
		})
	} else {
		return fetch(makeApiUrl(path, params), {
			method: 'PUT',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
	}
}

export function fetchDelete(path = '/', body = {}, params = {}, auth = false) {
	if (auth) {
		return fetch(makeApiUrl(path, params), {
			method: 'DELETE',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				'Authorization': makeAuthorizationHeader()
			}
		})
	} else {
		return fetch(makeApiUrl(path, params), {
			method: 'DELETE',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
	}
}