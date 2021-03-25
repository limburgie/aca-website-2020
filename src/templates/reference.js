import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import {StructuredText} from 'react-datocms';
import ExternalVideo from "../components/external_video";

export default function Reference({data}) {
    const reference = data.datoCmsReference
    return (
        <Layout>
            <Link to="/references" style={{float: `right`, display: `inline-block`, marginTop: `1rem`}}>Go back</Link>
            <h2>{reference.projectName}</h2>
            <Img fluid={reference.screenshot.fluid} alt={reference.screenshot.alt} style={{marginBottom: `1rem`}}/>
            <div>
                {
                    <StructuredText
                        data={reference.description}
                        renderBlock={({record}) => {
                            switch (record.__typename) {
                                case "DatoCmsCallToAction":
                                    return <button type="button" onClick={(event => {
                                        event.preventDefault();
                                        window.location.href = record.buttonUrl;
                                    })}>{record.buttonLabel}</button>;
                                case "DatoCmsVideo":
                                    return <ExternalVideo url={record.video.url}/>;
                                case "DatoCmsImage":
                                    return <img src={record.image.url}/>
                                case "DatoCmsDoubleImage":
                                    return <div style={{display: `flex`}}>
                                        {record.images.map((node) => (
                                            <div style={{flex: `1`, marginLeft: `10px`, marginRight: `10px`}}>
                                                <img src={node.url} style={{width: `100%`}}/>
                                            </div>
                                        ))}
                                    </div>;
                                case "DatoCmsImageText":
                                    return <div style={{display: `flex`}}>
                                        <div style={{flex: `1`, marginLeft: `10px`, marginRight: `10px`}}>
                                            <img src={record.image.url} style={{width: `100%`}}/>
                                        </div>
                                        <div style={{flex: `1`, marginLeft: `10px`, marginRight: `10px`}}>
                                            <div dangerouslySetInnerHTML={{__html: record.text}}/>
                                        </div>
                                    </div>;
                                default:
                                    return <div>{record.__typename}</div>;
                            }
                        }
                        }/>
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        datoCmsReference(slug: { eq: $slug }) {
            customerName
			projectName
			screenshot {
                fluid(imgixParams: {w: "1200", h: "200", fit: "crop", crop: "edges"}) {
					...GatsbyDatoCmsFluid
				}
			}
			description {
              value
              blocks {
                ... on DatoCmsCallToAction {
                  __typename
                  id: originalId
                  buttonLabel
                  buttonUrl
                }
                ... on DatoCmsVideo {
                  __typename
                  id: originalId
                  video {
                    url
                  }
                }
                ... on DatoCmsImage {
                  __typename
                  id: originalId
                  image {
                    alt
                    url
                  }
                }
                ... on DatoCmsImageText {
                  __typename
                  id: originalId
                  image {
                    alt
                    url
                  }
                  text
                }
                ... on DatoCmsDoubleImage {
              __typename
              id: originalId
              images {
                alt
                url
              }
            }
              }
            }
        }
    }
`