const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions

	const query = await graphql(`
    query {
        allDatoCmsReference {
            edges {
				node {
					slug
				}
			}
        }
        allDatoCmsLandingPage {
            edges {
				node {
					slug
				}
			}
        }
        allDatoCmsPodLandingPage {
            edges {
				node {
					slug
				}
			}
        }
    }
  `)

	query.data.allDatoCmsReference.edges.forEach(({node}) => {
		createPage({
			path: "/references/" + node.slug,
			component: path.resolve(`./src/templates/reference.js`),
			context: {
				slug: node.slug,
			},
		})
	});

	query.data.allDatoCmsLandingPage.edges.forEach(({node}) => {
		createPage({
			path: node.slug,
			component: path.resolve(`./src/templates/landing-page.js`),
			context: {
				slug: node.slug,
			},
		})
	});

	query.data.allDatoCmsPodLandingPage.edges.forEach(({node}) => {
		createPage({
			path: node.slug,
			component: path.resolve(`./src/templates/pod-landing-page.js`),
			context: {
				slug: node.slug,
			},
		})
	});
}