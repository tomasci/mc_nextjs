import Link from 'next/link'
import Head from "next/head"

function SysError({statusCode, message}) {
	return (
		<div className={"app"}>
			<Head>
				<title>
					{statusCode} – {statusCode === 404 ? 'Not Found' : statusCode === 500 ? 'Internal Server Error' : 'Something went wrong'} – MinecraftMods.xyz
				</title>
			</Head>

			<h1>
				{statusCode} – {statusCode === 404 ? 'Not Found' : statusCode === 500 ? 'Internal Server Error' : 'Something went wrong'}
			</h1>
			<div>
				<Link href={"/"}>
					<a>
						Go to main page
					</a>
				</Link>
			</div>
			{/*{message ? (*/}
			{/*	<div>*/}
			{/*		<p>*/}
			{/*			Details:*/}
			{/*		</p>*/}
			{/*		<p>*/}
			{/*			{message}*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*) : null}*/}
		</div>
	)
}

export default SysError