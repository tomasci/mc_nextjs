import Link from 'next/link'

function Nav() {
	return (
		<div className="nav">
			<Link href={"/"}>
				<a>
					Main page
				</a>
			</Link>
			<Link href={"/docs/install"}>
				<a>
					How to install mods
				</a>
			</Link>
			{/*<a href="#">For creators</a>*/}
			{/*<a href="#">How to install mods</a>*/}
		</div>
	)
}

export default Nav