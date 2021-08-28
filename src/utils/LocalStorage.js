// const appStorage = window.localStorage
let appStorage = false
if (typeof window !== "undefined") {
	appStorage = localStorage
}

export const lsTokenParam = 'token'

export function lsSetItem(param, value) {
	appStorage.setItem(param, value)
}

export function lsGetItem(param) {
	return appStorage.getItem(param)
}

export function lsRemItem(param) {
	appStorage.removeItem(param)
}

export function lsClearStorage() {
	appStorage.clear()
}