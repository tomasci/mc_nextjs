import Layout from "../../src/components/layout"
import Head from "next/head"


function Install() {
	return (
		<Layout>
			<Head>
				<title>
					How to install mods in Minecraft Bedrock and Minecraft PE – Minecraftmods.xyz
				</title>
				<meta name={"description"} content="This publication describes, how to install any modifications (addons, mods, mcpack, mcworld, mcaddod etc) in Minecraft Bedrock and Minecraft PE."/>
			</Head>

			<div className={"docs docs-install"}>
				<h1>
					How to install mods in Minecraft Bedrock and Minecraft PE
				</h1>
				<p>
					At first just watch this small video where I show, how to import modifications into the game:
				</p>

				<div className="video">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/D_23U8YSTcQ"
							title="YouTube video player" frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen/>
				</div>

				<h2>
					How to install mods on iOS and Android?
				</h2>

				<ol>
					<li>
						Download and install Minecraft from AppStore or GooglePlay
					</li>
					<li>
						Download any addon from this site
					</li>
					<li>
						<b>On Android</b> just select your file in your default file manager and click open with, then click "Minecraft".
					</li>
					<li>
						<b>On iOS</b> the default "Files" will not import modification correct. Every time you try - you will have import error. So download any other file manager from AppStore, move mods there and from this app tap share, and open file in Minecraft.
					</li>
					<li>
						Activate mod globally with settings from main screen or in local world with changing it settings through editing the world.
					</li>
				</ol>
			</div>
		</Layout>
	)
}

export default Install