import Header from "./Header/Header"
import Footer from "./Footer/Footer"

function Layout({children}) {
	return (
		<div className="app">
			<Header/>
			{children}
			<Footer/>
		</div>
	)
}

export default Layout