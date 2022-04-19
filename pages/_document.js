import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import theme from '../utils/theme'
import createEmotionCache from '../utils/create-emotion-cache'

export default class MyDocument extends Document {
	render() {
		return (
			<>
				<Html lang="en">
					<Head>
						{/* PWA primary color */}
						<meta name="theme-color" content={theme.palette.primary.main} />
						<link rel="shortcut icon" href="/static/favicon.ico" />
						<link
							rel="stylesheet"
							href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
							integrity="undefined"
							crossOrigin="anonymous"
						/>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
						<link
							href="https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap"
							rel="stylesheet"
						></link>
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
						/>
						<script
							defer
							src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
							integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
							crossOrigin="anonymous"
						></script>

						{/* Inject MUI styles first to match with the prepend: true configuration. */}
						{this.props.emotionStyleTags}
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage

	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />
				},
		})

	const initialProps = await Document.getInitialProps(ctx)

	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	))

	return {
		...initialProps,
		emotionStyleTags,
	}
}
