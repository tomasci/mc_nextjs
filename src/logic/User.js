import {lsGetItem, lsRemItem, lsTokenParam} from "../utils/LocalStorage";
import {fetchGet, fetchPost} from "../utils/Api";
import {toggleLoggedIn} from "../store/slices/AuthSlice";

export async function initialAuthCheck() {
	let token = (isTokenExists() ? lsGetItem(lsTokenParam) : undefined)

	if (!Boolean(token)) {
		return {
			status: {
				error: true,
				code: 500,
				message: 'Empty token.'
			}
		}
	}

	let user = await fetchGet('/users/me', {}, true)
	console.log(user)

	return
	//
	// let token = (isTokenExists()) ? lsGetItem(lsTokenParam) : undefined
	//
	// return fetchGet('/users/me', {}, true)
	// 	.then(res => res.json())
	// 	.then(result => {
	// 		if (result.statusCode === 401) {
	// 			lsRemItem(lsTokenParam)
	// 			return {
	// 				state: false
	// 			}
	// 		}
	//
	// 		return {
	// 			state: true,
	// 			jwt: token,
	// 			username: result.username,
	// 			id: result.id
	// 		}
	// 	})
}

function isTokenExists() {
	let token = lsGetItem(lsTokenParam)
	return !!token;
}

export function makeLoginRequest(values = {identifier: '', password: ''}, isRegister = false) {
	let path = (isRegister) ? '/auth/local/register' : '/auth/local'
	return fetchPost(path, values)
		.then(res => res.json())
		.then(result => {
			if (result.statusCode === 400) {
				return {
					state: false
				}
			}

			return {
				state: true,
				jwt: result.jwt,
				username: result.user.username,
				id: result.user.id
			}
		})
}

// export function makeRegisterRequest(values = {username: '', email: '', password: ''}) {
//     return fetchPost('/auth/local/register', values)
//         .then(res => res.json())
//         .then(result => {
//             if (result.statusCode === 400) {
//                 return {
//                     state: false
//                 }
//             }
//
//             return {
//                 state: true,
//                 jwt: result.jwt,
//                 username: result.user.username
//             }
//         })
// }

export function logout(dispatch) {
	lsRemItem(lsTokenParam)
	dispatch(toggleLoggedIn({
		isLoggedIn: false,
		jwt: '',
		username: '',
		id: ''
	}))
}