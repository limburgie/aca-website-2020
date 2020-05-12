import React from "react"
import Img from 'gatsby-image'
import {graphql} from "gatsby";
import Layout from "../components/layout";

export default function Home({data}) {
	return (
		<Layout>
			<img src={data.datoCmsHomepage.logo.url} width={100}/>
			<Img fluid={data.datoCmsHomepage.banner.fluid}/>
			<p/>
			<div dangerouslySetInnerHTML={{__html: data.datoCmsHomepage.intro}}/>
		</Layout>
	);
}

export const query = graphql`
    query AboutQuery {
        datoCmsHomepage {
            logo {
                url
            }
			banner {
                fluid(imgixParams: {w: "1200", h: "200", fit: "crop", crop: "entropy"}) {
                    ...GatsbyDatoCmsFluid
                }
			}
			intro
        }
    }
`