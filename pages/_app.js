// import Layout from "../src/components/layout"
import '../src/styles/styles.scss'
import {Provider} from "react-redux"
import appStore from "../src/store/store"
import {useRouter} from "next/router"

import * as ga from '../src/utils/GoogleAnalytics'
import {useEffect} from "react"

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageView(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        // <Layout>
        <Provider store={appStore}>
            <Component {...pageProps} />
        </Provider>
        // </Layout>
    )
}

export default MyApp
