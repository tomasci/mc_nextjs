import {createSlice} from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
	name: 'Auth',
	initialState: {
		isLoggedIn: false,
		jwt: '',
		username: '',
		id: ''
	},
	reducers: {
		toggleLoggedIn: (state, action) => {
			if (action.payload.isLoggedIn) {
				state.isLoggedIn = action.payload.isLoggedIn
				state.jwt = action.payload.jwt
				state.username = action.payload.username
				state.id = action.payload.id
			}
		}
	}
})

export const {toggleLoggedIn} = AuthSlice.actions
export default AuthSlice.reducer