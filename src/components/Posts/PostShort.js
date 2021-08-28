import Link from 'next/link'
import {apiUrl} from "../../api"

function PostShort({pack}) {
	return (
		<div className="story story-short">
			<div className="info info-basic">
				<div className="icon">
					<Link href={"/read/" + pack.id}>
						<a>
							<img src={apiUrl + "/uploads/extracted/" + pack.folderpath + '/pack_icon.png'} alt="" />
						</a>
					</Link>
				</div>
				<div className="heading">
					<Link href={"/read/" + pack.id}>
						<a>
							<h2>
								{pack.pack_name} v.{pack.pack_version} [{pack.pack_type}-pack] [for {pack.pack_engine_version}+]
							</h2>
						</a>
					</Link>
					{/*<div className="details">*/}
					{/*	<Link href={"/read/" + pack.id}>*/}
					{/*		<a>*/}
					{/*			Details & download*/}
					{/*		</a>*/}
					{/*	</Link>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	)
}

export default PostShort