import Head from 'next/head'

const Meta = (props) => (
	<Head>
		<title>{props.title} - {props.sitename}</title>
		<meta name="description" content={props.description} />
		<meta itemprop="name" content={props.title} />
		<meta itemprop="description" content={props.description} />
		<meta itemprop="image" content={props.image} />
		<meta property="og:type" content={props.type} />
		<meta property="og:title" content={props.title} />
		<meta property="og:description" content={props.description} />
		<meta property="og:image" content={props.image} />
		<meta property="og:url" content={props.url} />
		<meta property="og:site_name" content={props.sitename} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:url" content={props.url} />
		<meta name="twitter:title" content={props.description} />
		<meta name="twitter:description" content={props.description} />
		<meta name="twitter:image:alt" content={props.imagealt} />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
    />
	</Head>
)

export default Meta
