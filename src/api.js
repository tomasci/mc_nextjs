export const apiUrl = process.env.API_URL

export default function makeApiUrl(path, params = {}) {
	const url = new URL(apiUrl + path)
	url.search = new URLSearchParams(params).toString()
	return url.toString()
}