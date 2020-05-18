import React from "react"
import Img from 'gatsby-image'
import {graphql} from "gatsby";
import Layout from "../components/layout";

export default function Home({data}) {
	return (
		<Layout>
			<Img fluid={data.datoCmsHomepage.banner.fluid} alt={data.datoCmsHomepage.banner.alt}/>
			<p/>
			<div dangerouslySetInnerHTML={{__html: data.datoCmsHomepage.intro}}/>
		</Layout>
	);
}

export const query = graphql`
    query {
        datoCmsHomepage {
            logo {
                url
				alt
            }
			banner {
                fluid(imgixParams: {w: "1200", h: "200", fit: "crop", crop: "entropy"}) {
                    ...GatsbyDatoCmsFluid
                }
				alt
			}
			intro
        }
    }
`