import {useEffect} from "react"

function Admin() {
	const rows = new Array(100).fill(1, 0, 100)

	// useEffect(() => {
	// 	for (let i = 0; i < 100; i++) {
	// 		rows.push(i)
	// 		console.log(rows)
	// 	}
	// }, [rows])
	//
	// const rows = [1,2,3]


	return(
		<div className="admin">
			<div className="breadcrumb">
				<span>minecraftmods.xyz</span>
				<span>@tomasci</span>
				<span>control panel index</span>
			</div>

			<div className="content">
				<div className="tables">
					<div className="heading">
						navigation
					</div>
					<div className="block">
						<a href="#" type={"active"}>
							addons
						</a>
						<a href="#">
							dependencies
						</a>
						<a href="#">
							users
						</a>
					</div>
				</div>
				<div className="table">
					<div className="controls">
						<div className="block">
							addons
						</div>
						<div className="block">
							{'|< < 500 rows > >|'}
						</div>
						<div className="block">
							refresh
						</div>
						<div className="block">
							new
						</div>
					</div>
					<div className="filter">
						<div className="block block-where">
							<label htmlFor="where">
								Where
							</label>
							<input type="text" name={"where"}/>
						</div>
						<div className="block block-orderBy">
							<label htmlFor="where">
								Order By
							</label>
							<input type="text" name={"orderBy"}/>
						</div>
					</div>
					<div className="data">
						<table>
							<thead>
								<tr>
									<th>
										id
									</th>
									<th>
										File path
									</th>
									<th>
										Folder path
									</th>
									<th>
										uuid
									</th>
									<th>
										Pack name
									</th>
									<th>
										Pack description
									</th>
									<th>
										Pack type
									</th>
									<th>
										Pack version
									</th>
									<th>
										Pack engine version
									</th>
									<th>
										Published
									</th>
								</tr>
							</thead>
							<tbody>
							{rows.map((el, index) => {
								return (
									<tr key={index}>
										<td>
											{index}
										</td>
										<td>
											<a href="#">
												8e8fdd9c-3c5b-4042-8f92-3a2d1a33fcfa.mcpack
											</a>
										</td>
										<td>
											<div className="input" contentEditable={true} spellCheck={false}>
												8e8fdd9c-3c5b-4042-8f92-3a2d1a33fcfa
											</div>
										</td>
										<td>
											<div className="input" contentEditable={true}>
												ee649bcf-256c-4013-9068-6a802b89d756
											</div>
										</td>
										<td>
											<div className="input" contentEditable={true}>
												More Food Behavior Pack
											</div>
										</td>
										<td>
											<div className="input" contentEditable={true}>
												Install On Global Packs For More Features! §8Pack by:§6 Lego§epit§rstop
											</div>
										</td>
										<td>
											<div className="input" contentEditable={true}>
												resources
											</div>
										</td>
										<td>
											<div className="input" contentEditable={true}>
												0.0.9
											</div>
										</td>
										<td>
											<div className="input" contentEditable={true}>
												1.13.0
											</div>
										</td>
										<td>
											<input type="checkbox"/>
										</td>
									</tr>
								)
							})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Admin