import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"

export default function Reference({data}) {
	const reference = data.datoCmsReference
	return (
		<Layout>
			<Link to="/references" style={{float: `right`, display: `inline-block`}}>Go back</Link>
			<h2>{reference.projectName}</h2>
			<p>
				<img src={reference.screenshot.url + "?fit=crop&h=300&w=1200&crop=edges"} alt={reference.screenshot.alt}/>
			</p>
			<div dangerouslySetInnerHTML={{__html: reference.description}}/>
		</Layout>
	)
}

export const query = graphql`
    query($slug: String!) {
        datoCmsReference(slug: { eq: $slug }) {
            customerName
			projectName
			description
			screenshot {
                url
				alt
			}
        }
    }
`