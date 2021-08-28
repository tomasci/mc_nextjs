function Read() {
	return (
		<div className="app">
			<div className="header">
				<div className="logotype">
					<a href="#">
						MinecraftMods.xyz
					</a>
					<p>
						Minecraft Bedrock & Minecraft PE mods database
					</p>
				</div>

				<div className="nav">
					<a href="#">Main page</a>
					<a href="#">For creators</a>
					<a href="#">How to install mods</a>
				</div>
			</div>

			<div className="content">
				<div className="story story-full">
					<div className="info info-basic">
						<div className="icon">
							<img src="http://192.168.1.157:3000/uploads/extracted/b9ef9e60-f1c2-4992-9e70-5adffeba7112/pack_icon.png?w=384&q=75" alt="" />
						</div>
						<div className="heading">
							<h1>
								Vanilla Behavior Pack v.0.0.1 [data-pack] [for 1.17.0+]
							</h1>
							<div className="compatibility">
								For <span>Minecraft Bedrock 1.17.0+</span> and <span>Minecraft PE 1.17.0+</span>
							</div>
						</div>
					</div>
					<div className="info info-full">
						<div className="about">
							<p>
								Example vanilla resource pack
							</p>
						</div>

						<div className="download">
							<div className="link">
								<a href="#">
									Download <span>res</span>
								</a>
							</div>

							<div className="link">
								<a href="#">
									Download <span>beh</span>
								</a>
							</div>

							<p>
								Remember: you need to download all the attachments above and import all of them into the game.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				2021, minecraftmods.xyz
			</div>
		</div>
	)
}

export default Read