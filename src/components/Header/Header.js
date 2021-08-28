import Nav from "../Nav/Nav"
import Link from 'next/link'

function Header() {
	return (
		<div className="header">
			<div className="logotype">
				<Link href={"/"}>
					<a>
						MinecraftMods.xyz
					</a>
				</Link>
				<p>
					Minecraft Bedrock & Minecraft PE mods database
				</p>
			</div>

			<Nav/>
		</div>
	)
}

export default Header