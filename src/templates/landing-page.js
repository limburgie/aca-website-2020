import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default function LandingPage({data}) {
	const landingPage = data.datoCmsLandingPage
	return (
		<Layout>
			<h2>{landingPage.title}</h2>
			{
				landingPage.contents.map((block) => (
					<div key={block.id}>
						{
							block.model.apiKey === 'text_block' &&
							<div dangerouslySetInnerHTML={{__html: block.text}}/>
						}
						{
							block.model.apiKey === 'quote' &&
							<div style={{background: `#ddd`, padding: `5px 40px`, marginBottom: `20px`}}>
								<h4>“{block.quote}“</h4>
								<p>- {block.author}</p>
							</div>
						}
						{
							block.model.apiKey === 'call_to_action' &&
							<p>
								<a href={block.buttonUrl} target="_blank" rel="noopener noreferrer">{block.buttonLabel}</a>
							</p>
						}
					</div>
				))
			}
		</Layout>
	)
}

export const query = graphql`
    query($slug: String!) {
        datoCmsLandingPage(slug: { eq: $slug }) {
            title
			subtitle
			contents {
				... on DatoCmsTextBlock {
					id
					model {
						apiKey
					}
					text
				}
				... on DatoCmsQuote {
					id
					model {
						apiKey
					}
					quote
					author
				}
				... on DatoCmsCallToAction {
					id
					model {
						apiKey
					}
					buttonLabel
					buttonUrl
				}
			}
        }
    }
`