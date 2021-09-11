import SysError from "../src/components/Error/Error"

function Custom404() {
	return <SysError statusCode={404}/>
}

export default Custom404