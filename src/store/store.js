import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";

// export default configureStore({
// 	reducer: {
// 		Auth: AuthSlice
// 	}
// })


const appStore = configureStore({
	reducer: {
		Auth: AuthSlice
	}
})

export default appStore