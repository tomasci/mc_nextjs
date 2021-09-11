// log the page view with their URL
export const pageView = (url) => {
	window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
		page_path: url,
	})

	ym(process.env.NEXT_PUBLIC_YANDEX_METRIKA, 'hit', url)
}

// // log specific events happening.
// export const event = ({ action, params }) => {
// 	window.gtag('event', action, params)
//
// 	// ym(process.env.NEXT_PUBLIC_YANDEX_METRIKA, 'reachGoal', action.toString(), params)
// 	// https://api.minecraftmods.xyz/uploads/source/353cdce6-172f-490f-bbe0-fb40f126cebb.mcpack
//
// 	// let fileUrl = process.env.NEXT_PUBLIC_API_URL + '/uploads/source/' + params.packPath + '.mcpack'
// 	let refererUrl = process.env.NEXT_PUBLIC_SITE_URL + '/read/' + params.packID
// 	ym(process.env.NEXT_PUBLIC_YANDEX_METRIKA, 'file', refererUrl)
// }

export const download = ({ action, params }) => {
	// where file is downloaded
	let pageUrl = process.env.NEXT_PUBLIC_SITE_URL + '/read/' + params.packID

	// google
	window.gtag('event', 'file_download', {
		file_name: params.packID,
		link_url: pageUrl
	})

	// yandex
	ym(process.env.NEXT_PUBLIC_YANDEX_METRIKA, 'file', pageUrl)
}