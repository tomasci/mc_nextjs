// import {useEffect} from "react"
// import Image from 'next/image'
//
// const ImageLoader = ({ src, width, quality }) => {
// 	return `http://localhost:3000/uploads/extracted/${src}?w=${width}&q=${quality || 75}`
// }

import {useRouter} from "next/router"
import GoBack from "../GoBack"
import {apiUrl} from "../../api"

import * as ga from '../../utils/GoogleAnalytics'

function PostFull({pack}) {
	const trackDownload = (id, packName, packType, packPath) => {
		ga.download({
			action: "download",
			params: {
				packID: id,
				packName: packName,
				packType: packType,
				packPath: packPath
			}
		})

		// ga.event({
		// 	action: "download",
		// 	params : {
		// 		packID: id,
		// 		packName: packName,
		// 		packType: packType,
		// 		packPath: packPath
		// 	}
		// })
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
			</div>

			<GoBack/>

		</div>
	)
}

export default PostFull