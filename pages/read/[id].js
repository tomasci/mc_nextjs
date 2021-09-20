import makeApiUrl from "../../src/api"
import PostFull from "../../src/components/Posts/PostFull"
import Error from 'next/error'
import Layout from "../../src/components/layout"
import Head from "next/head"
import SysError from "../../src/components/Error/Error"

function Read({postData, ogImageData, recipesData}) {
	const pack = postData.data.addon
	const status = postData.status

	if (status.error === true) {
		return <SysError statusCode={status.code} message={status.message}/>
	}

	return (
		<Layout>
			<Head>
				<title>
					{pack.mc_addon.pack_name} – Minecraft Bedrock and PE {pack.mc_addon.pack_engine_version}+ {pack.mc_addon.pack_type}-pack
				</title>
				<meta name={"description"} content={pack.mc_addon.pack_description}/>

				<meta property="og:type" content="website"/>
				<meta property="og:title" content={pack.mc_addon.pack_name + ' – Minecraft Bedrock and PE ' + pack.mc_addon.pack_engine_version + '+ ' + pack.mc_addon.pack_type + '-pack'}/>
				<meta property="og:description" content={pack.mc_addon.pack_description}/>
				<meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + '/read/' + pack.mc_addon.id}/>
				<meta property="og:site_name" content="MinecraftMods.xyz"/>
				<meta property="og:locale" content="en_GB"/>
				{(ogImageData.status.error === false) ? (
					<meta property="og:image" content={process.env.NEXT_PUBLIC_API_URL + '/uploads/og_images/' + ogImageData.data.image}/>
				) : null}
			</Head>

			<div className={"content"}>
				<PostFull key={pack.mc_addon.id} pack={pack} recipes={recipesData}/>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({query}) {
	const id = query.id

	const post = await fetch(makeApiUrl(`/mods/addon/${id}`))
	const postData = await post.json()

	const ogImage = await fetch(makeApiUrl(`/og/image/${id}`))
	const ogImageData = await ogImage.json()

	const recipes = await fetch(makeApiUrl(`/mods/addon/recipes/${id}`))
	const recipesData = await recipes.json()

	return {
		props: {
			postData,
			ogImageData,
			recipesData
		}
	}
}

export default Read