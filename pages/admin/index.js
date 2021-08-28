// import {useEffect, useState} from "react"
// import {initialAuthCheck} from "../../src/logic/User"
// import {toggleLoggedIn} from "../../src/store/slices/AuthSlice"
// import {useRouter} from "next/router"
// import {useDispatch, useSelector} from "react-redux"
// import Error from "next/error"
//
// function Admin() {
// 	// const router = useRouter()
// 	// const dispatch = useDispatch()
// 	// const loginCheck = useLoginCheck()
// 	const isLoggedIn = useSelector(state => state.Auth.isLoggedIn)
// 	let loginCheck = useLoginCheck()
//
// 	if (loginCheck.status.error === true) {
// 		return <Error statusCode={loginCheck.status.code}/>
// 	}
//
// 	return (
// 		<>
// 			123admin
// 			{isLoggedIn.toString()}
// 		</>
// 	)
// }
//
// export function useLoginCheck(router = '', dispatch = '') {
// 	const [login, setLogin] = useState({})
//
// 	useEffect(async () => {
// 		let initial = await initialAuthCheck()
// 		setLogin(initial)
// 	}, [])
//
// 	return login
// }
//
// export default Admin

function Admin() {
	return (
		<></>
	)
}

export default Admin