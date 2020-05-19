import Layout from "../components/layout";
import {Link, graphql} from "gatsby";
import React from "react";

export default function References({data}) {
	return (
		<Layout>
			<h2>References</h2>
			<ul>
				{data.allDatoCmsReference.edges.map(({node}) => (
					<li><Link to={"/references/" + node.slug}>{node.customerName}: {node.projectName}</Link></li>
				))}
			</ul>
		</Layout>
	);
}

export const query = graphql`
    query {
        allDatoCmsReference {
            edges {
				node {
					slug
					customerName
					projectName
				}
			}
        }
    }
`