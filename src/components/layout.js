import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import AcaLogo from "../images/aca-logo.png"

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		<Link to={props.to}>{props.children}</Link>
	</li>
)

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
				<header style={{ marginBottom: `1.5rem` }}>
					<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
						<img src={AcaLogo} alt="ACA Logo"/>
					</Link>
					<ul style={{ listStyle: `none`, float: `right` }}>
						<ListLink to="/">Home</ListLink>
						<ListLink to="/references/">References</ListLink>
					</ul>
				</header>
				{children}
			</div>
		</div>
	)
}