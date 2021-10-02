import GoBack from "../GoBack"
import {apiUrl} from "../../api"

import * as ga from '../../utils/GoogleAnalytics'

function PostFull({pack, recipes}) {
	const trackDownload = (id, packName, packType, packPath) => {
		ga.download(
			"download",
			{
				packID: id,
				packName: packName,
				packType: packType,
				packPath: packPath
			}
		)
	}

	return (
		<div className="story story-full">
			<GoBack/>

			<div className="info info-basic">
				<div className="icon">
					<img src={apiUrl + "/uploads/extracted/" + pack.mc_addon.folderpath + '/pack_icon.png'} alt="" />
				</div>
				<div className="heading">
					<h1>
						{pack.mc_addon.pack_name} v.{pack.mc_addon.pack_version} [{pack.mc_addon.pack_type}-pack] [for {pack.mc_addon.pack_engine_version}+]
					</h1>
					<div className="compatibility">
						For <span>Minecraft Bedrock {pack.mc_addon.pack_engine_version}+</span> and <span>Minecraft PE {pack.mc_addon.pack_engine_version}+</span>
					</div>
				</div>
			</div>
			<div className="info info-full">
				<div className="about">
					<p>
						{pack.mc_addon.pack_description}
					</p>
				</div>

				<div className="download">
					<div className={"link"}>
						<a
							href={apiUrl + '/uploads/source/' + pack.mc_addon.filepath}
							onClick={() => {
								trackDownload(pack.mc_addon.id, pack.mc_addon.pack_name, pack.mc_addon.pack_type, pack.mc_addon.folderpath)
							}}
						>
							Download <span>{pack.mc_addon.pack_type === 'data' ? 'BEH' : pack.mc_addon.pack_type === 'resources' ? 'RES' : pack.mc_addon.pack_type}</span>
						</a>
					</div>
					{pack.mc_dependencies && pack.mc_dependencies.map((dep, index) => {
						return (
							<div className={"link"} key={index}>
								<a
									href={apiUrl + '/uploads/source/' + dep.filepath}
									onClick={() => {
										trackDownload(pack.mc_addon.id, pack.mc_addon.pack_name, dep.pack_type, dep.folderpath)
									}}
								>
									Download <span>{dep.pack_type === 'data' ? 'BEH' : dep.pack_type === 'resources' ? 'RES' : dep.pack_type}</span>
								</a>
							</div>
						)
					})}

					<p>
						Remember: you need to download all the attachments above and import all of them into the game.
					</p>
				</div>

				{
					(recipes.status.error) ? null : (
				<div className="recipes">
					{/*{*/}
					{/*	(recipes.status.error) ? null : (*/}
							<div className={"container"}>
								<div className="new">
									<span>
										New!
									</span>
								</div>

								<details className={"list"}>
									<summary>
										Recipes
									</summary>
									<p>
										This feature now is in early alpha, and because of that there are no localized names or craft-tables with textures, only craft schemes. Hope you enjoy it! (and wait for the final version)
									</p>

									{recipes.data.recipes.map((recipe, index) => {
										return (
											<details className={"recipe"} key={index}>
												<summary>Recipe for {recipe.result.item}</summary>
												<p>
													To create/craft "{recipe.result.item}" you need:
												</p>
												<ul>
													{recipe.keys.map((item, index) => {
														return (
															<li key={index}>
																<span className={'c c_' + (index + 1)}/> {item.value} <span className={"pieces"}>{computeCount(recipe.pattern, item.key)} pcs.</span>
															</li>
														)
													})}
												</ul>
												<p>
													Crafting table scheme:
												</p>
												<div className="scheme">
													{recipe.pattern.map((line, index) => {
														return (
															<div className="line" key={index}>
																{line.map((slot, index) => {
																	return (
																		<span className={"slot slot_" + findObjectByKeyInArray(slot, recipe.keys)} key={index}/>
																	)
																})}
															</div>
														)
													})}
												</div>
											</details>
										)
									})}
								</details>
							</div>
					{/*	)*/}
					{/*}*/}
				</div>
					)
				}
			</div>

			<GoBack/>

		</div>
	)
}

function computeCount(pattern, key) {
	let count = 0

	for (const line of pattern) {
		line.forEach((el) => {
			if (el === key) {
				count++
			}
		})
	}

	return count
}

function findObjectByKeyInArray(key, array) {
	let search = array.find(s => s.key === key)
	return array.indexOf(search) + 1
}

export default PostFull