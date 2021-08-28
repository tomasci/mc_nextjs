import {useMemo} from "react"
import Link from 'next/link'


function Pagination({pagesCount, currentPage}) {
	pagesCount = Number(pagesCount)
	currentPage = Number(currentPage)

	const previousAvailable = useMemo(() => !(currentPage <= 1), [currentPage])
	const nextAvailable = useMemo(() => !(currentPage >= pagesCount), [currentPage, pagesCount])

	function getUrl(next = false) {
		let num = (next ? (currentPage + 1) : (currentPage - 1))
		return ['/page/', num].join('')
	}

	function getCurrentUrl() {
		return ['/page/', currentPage].join('') + '#'
	}

	return (
		<div className="pagination">
			<div className={(previousAvailable ? 'prev' : 'prev prev-disabled')}>
				<Link href={(previousAvailable ? getUrl(false) : '#')}>
					<a>
						prev page
					</a>
				</Link>
			</div>
			<div className="current">
				<Link href={getCurrentUrl()}>
					<a>
						{currentPage} of {pagesCount}
					</a>
				</Link>
			</div>
			<div className={(nextAvailable ? 'next' : 'next next-disabled')}>
				<Link href={(nextAvailable ? getUrl(true) : '#')}>
					<a>
						next page
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Pagination