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

				<meta property="og:type" content="website"/>
				<meta property="og:title" content={pack.mc_addon.pack_name + ' – ' + pack.mc_addon.pack_type + '-pack for Minecraft Bedrock and PE ' + pack.mc_addon.pack_engine_version + '+'}/>
				<meta property="og:description" content={pack.mc_addon.pack_description}/>
				<meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + '/read/' + pack.mc_addon.id}/>
				<meta property="og:site_name" content="MinecraftMods.xyz"/>
				<meta property="og:locale" content="en_GB"/>
			</Head>

			<div className={"content"}>
				<PostFull key={pack.mc_addon.id} pack={pack}/>
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