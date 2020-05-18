import React from "react"
import {graphql, Link} from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export default function Reference({data}) {
	const reference = data.datoCmsReference
	return (
		<Layout>
			<Link to="/references" style={{float: `right`, display: `inline-block`}}>Go back</Link>
			<h2>{reference.projectName}</h2>
			<p>
				<Img fluid={reference.screenshot.fluid} alt={reference.screenshot.alt}/>
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
                fluid(imgixParams: {w: "1200", h: "200", fit: "crop", crop: "entropy"}) {
                    ...GatsbyDatoCmsFluid
                }
				alt
			}
        }
    }
`