import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"

export default function LandingPage({data}) {
    const podLandingPage = data.datoCmsPodLandingPage
    return (
        <Layout>
            <h2>{podLandingPage.headerTitle}</h2>
            <div dangerouslySetInnerHTML={{__html: podLandingPage.heroTitle}}/>
            <div style={{display: `flex`}}>
                {podLandingPage.pillars.map((node) => (
                    <div style={{flex: `0.333`}}>
                        <div style={{display: `flex`}}>
                            <div style={{flex: `0.2`, marginRight: `20px`}}>
                                <img src={node.icon.url}/>
                            </div>
                            <div style={{flex: `0.8`, fontSize: `0.8em`}}>
                                {node.title}<br/>
                                <a href="#">{node.subtitle}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={podLandingPage.headerImage.url}/>
            <div style={{display: `flex`, justifyContent: `space-between`}}>
                {podLandingPage.pillars.map((pillar) => (
                    <div style={{flex: `0.45`, fontSize: `0.9em`}}>
                        <img src={pillar.icon.url} width="25px" style={{margin: 0}}/><br/>
                        <h4 style={{margin: `5px 0 10px`}}>{pillar.subtitle}</h4>
                        <div dangerouslySetInnerHTML={{__html: pillar.description}}/>
                    </div>
                ))}
            </div>
            <h3>Our partners</h3>
            <div style={{display: `flex`, alignItems: `center`, alignContent: `stretch`}}>
                {podLandingPage.partners.map((partner) => (
                    <div style={{flex: `0.2`, padding: `30px`, textAlign: `center`}}>
                        <a href={partner.url} target="_blank" style={{background: `none`}}>
                            <img src={partner.logo.url} style={{margin: 0}}/>
                        </a>
                    </div>
                ))}
            </div>
            <h3>News</h3>
            <div style={{display: `flex`}}>
                {podLandingPage.news.map((item) => (
                    <div style={{flex: `0.3`, alignItems: `spaceBetween`}}>
                        <div style={{backgroundColor: `#eee`, padding: `20px`, margin: `0 10px`, borderRadius: `5px`}}>
						{
							item.model.apiKey === 'reference' &&
							<div>
                                <span style={{fontSize: `0.7em`}}>Reference</span><br/>
                                <h4 style={{margin: 0}}>{item.projectName}</h4>
                                <Link to={"/references/" + item.slug}>Read more</Link>
							</div>
						}
						{
							item.model.apiKey === 'blog_post' &&
                            <div>
                                <span style={{fontSize: `0.7em`}}>Blog</span><br/>
                                <h4 style={{margin: 0}}>{item.title}</h4>
                                <Link to={"/blogs/" + item.slug}>Read more</Link>
                            </div>
						}
						</div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        datoCmsPodLandingPage(slug: { eq: $slug }) {
            id
			centerImages {
			  url
			}
			headerImage {
			  url
			}
			headerTitle
			heroTitle
			news {
			  ... on DatoCmsReference {
				id
				slug
				projectName
				model {
				  apiKey
				}
			  }
			  ... on DatoCmsBlogPost {
				id
				title
				model {
				  apiKey
				}
			  }
			}
			pillars {
			  title
			  subtitle
			  icon {
				url
			  }
			  description
			}
			partners {
			  url
			  logo {
				url
			  }
			}
        }
    }
`