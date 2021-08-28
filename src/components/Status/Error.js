function Error({statusCode, statusMessage}) {
	return (
		<div>
			<p>
				<b>Something went wrong.</b>
			</p>
			<p>
				Code: {statusCode}
			</p>
			<p>
				Message: {statusMessage}
			</p>
		</div>
	)
}

export default Error