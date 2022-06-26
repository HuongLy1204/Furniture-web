import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Provider, useDispatch } from 'react-redux'
import store from '../app/store'
import { AuthProvider, useAuth } from '../components/Auth/Auth'
import createEmotionCache from '../utils/create-emotion-cache'
import theme from '../utils/theme'
import "../styles/globals.css"


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	const Layout = Component.Layout

	
	// const [user, setUser] = useState(true)

	// useEffect(() => {
	//   setUser(isSuccess)
	// }, [])
	// console.log(isSuccess, "is");
	// console.log(user, "app");

	// if (pageProps.protected && user===false) {
	// 	return <NotAccess />
	// }

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Provider store={store}>
					<AuthProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AuthProvider>
				</Provider>
			</ThemeProvider>
		</CacheProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}
