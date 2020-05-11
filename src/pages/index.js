import React from "react"
import Img from 'gatsby-image'
import {graphql} from "gatsby";
import Layout from "../components/layout";

export default function Home({data}) {
	return (
		<Layout>
			<Img fixed={data.datoCmsHomepage.logo.fixed}/>
			<p/>
			<div dangerouslySetInnerHTML={{__html: data.datoCmsHomepage.intro}}/>
		</Layout>
	);
}

export const query = graphql`
    query AboutQuery {
        datoCmsHomepage {
            logo {
                fixed(width: 100) {
                    ...GatsbyDatoCmsFixed
                }
            }
			intro
        }
    }
`