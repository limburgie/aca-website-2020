import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({children}) {
	const data = useStaticQuery(
		graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
		`
	)

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>
			<div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
				{children}
			</div>
		</div>
	)
}