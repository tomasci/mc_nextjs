import {useEffect, useState} from "react"
import Error from "../Status/Error"
import PostShort from "./PostShort"
import Pagination from "../Pagination/Pagination"

function IndexPosts({postsData, currentPage}) {
	const posts = postsData.data.posts ? postsData.data.posts : []
	const pages = postsData.data.pages
	// const status = postsData.status

	// if (status.error === true) {
	// 	return (
	// 		<Error statusCode={status.code} statusMessage={status.message}/>
	// 	)
	// }

	return (
		<div>
			{posts.map((pack) => {
				return (
					<PostShort key={pack.id} pack={pack}/>
				)
			})}
			<Pagination pagesCount={pages} currentPage={currentPage}/>
		</div>
	)
}



export default IndexPosts