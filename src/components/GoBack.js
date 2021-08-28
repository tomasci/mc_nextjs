import {useRouter} from "next/router"

function GoBack() {
	const router = useRouter()

	return (
		<div className="goback">
			<a onClick={() => {router.back()}}>
				Go back
			</a>
		</div>
	)
}

export default GoBack