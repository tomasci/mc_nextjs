// import Head from 'next/head'
// // import Image from 'next/image'
// import IndexPosts from "../src/components/Posts/IndexPosts"
// import makeApiUrl from "../src/api"
// import Layout from "../src/components/layout"
//
// export default function Home({postsData}) {
//     return (
//         <Layout>
//             <Head>
//                 <title>
//                     MinecraftMods.xyz – Minecraft Bedrock & Minecraft PE mods database
//                 </title>
//                 <meta name={"description"} content={"MinecraftMods.xyz – is the Minecraft Bedrock and Minecraft PE mods database"}/>
//             </Head>
//             <div className={"content"}>
//                 <IndexPosts postsData={postsData} currentPage={1}/>
//             </div>
//         </Layout>
//     )
// }
//
// export async function getServerSideProps() {
//     const posts = await fetch(makeApiUrl('/mods/page/1'))
//     const postsData = await posts.json()
//
//     return {
//         props: {
//             postsData
//         }
//     }
// }

function Home() {
    return (
        <>
            Hello world!
        </>
    )
}

export default Home