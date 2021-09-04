import Head from 'next/head'
// import Image from 'next/image'
import IndexPosts from "../src/components/Posts/IndexPosts"
import makeApiUrl from "../src/api"
import Layout from "../src/components/layout"

export default function Home({postsData}) {
    return (
        <Layout>
            <Head>
                <title>
                    MinecraftMods.xyz – Minecraft Bedrock & Minecraft PE mods database
                </title>
                <meta name={"description"} content={"The Minecraft Bedrock and Minecraft PE mods database"}/>

                <meta property="og:type" content="website"/>
                <meta property="og:title" content={"MinecraftMods.xyz – Minecraft Bedrock & Minecraft PE mods database"}/>
                <meta property="og:description" content={"The Minecraft Bedrock and Minecraft PE mods database"}/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL}/>
                <meta property="og:site_name" content="MinecraftMods.xyz"/>
                <meta property="og:locale" content="en_GB"/>
            </Head>
            <div className={"content"}>
                <IndexPosts postsData={postsData} currentPage={1}/>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const posts = await fetch(makeApiUrl('/mods/page/1'))
    const postsData = await posts.json()

    return {
        props: {
            postsData
        }
    }
}