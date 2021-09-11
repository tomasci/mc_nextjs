import SysError from "../src/components/Error/Error"

function Custom500() {
	return <SysError statusCode={500}/>
}

export default Custom500