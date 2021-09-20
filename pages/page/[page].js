import IndexPosts from "../../src/components/Posts/IndexPosts"
import makeApiUrl from "../../src/api"
const {useRouter} = require("next/router")
import Layout from "../../src/components/layout"
import Head from 'next/head'
import SysError from "../../src/components/Error/Error"

function Page({postsData}) {
	const router = useRouter()
	const currentPage = router.query.page
	const status = postsData.status

	if (status.error === true) {
		return <SysError statusCode={status.code} message={status.message}/>
	}

	return (
		<Layout>
			<Head>
				<title>
					MinecraftMods.xyz – Page {currentPage}
				</title>
				<meta name={"description"} content={`Page ${currentPage} at MinecraftMods.xyz – the Minecraft Bedrock and Minecraft PE mods database`}/>
			</Head>

			<div className={"content"}>
				<IndexPosts postsData={postsData} currentPage={currentPage}/>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({query}) {
	const page = query.page

	const posts = await fetch(makeApiUrl(`/mods/page/${page}`))
	const postsData = await posts.json()

	return {
		props: {
			postsData
		}
	}
}

export default Page