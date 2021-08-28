import makeApiUrl from "../../src/api"
import PostFull from "../../src/components/Posts/PostFull"
import Error from 'next/error'
import Layout from "../../src/components/layout"
import Head from "next/head"

function Read({postData}) {
	const pack = postData.data.addon
	const status = postData.status

	if (status.error === true) {
		return (
			<Error statusCode={status.code}/>
		)
	}

	return (
		<Layout>
			<Head>
				<title>
					{pack.mc_addon.pack_name} – {pack.mc_addon.pack_type}-pack for Minecraft Bedrock and PE {pack.mc_addon.pack_engine_version}+
				</title>
				<meta name={"description"} content={pack.mc_addon.pack_description}/>
			</Head>

			<div className={"content"}>
				<PostFull key={pack.id} pack={pack}/>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({query}) {
	const id = query.id

	console.log(id)

	const post = await fetch(makeApiUrl(`/mods/addon/${id}`))
	const postData = await post.json()

	return {
		props: {
			postData
		}
	}
}

export default Read