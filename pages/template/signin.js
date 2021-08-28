function SignIn() {
	return (
		<div className="app">
			<div className="signin">
				<form>
					<div className="field">
						<label htmlFor="username">Username:</label>
						<input type="text" name={"username"} autoComplete={"off"}/>
					</div>
					<div className="field">
						<label htmlFor="username">Password:</label>
						<input type="password" name={"password"} autoComplete={"off"}/>
					</div>
					<div className="field">
						<button type={"submit"}>Sign in</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignIn