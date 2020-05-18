const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
    query {
        allDatoCmsReference {
            edges {
				node {
					slug
				}
			}
        }
    }
  `)

	result.data.allDatoCmsReference.edges.forEach(({node}) => {
		createPage({
			path: "/references/" + node.slug,
			component: path.resolve(`./src/templates/reference.js`),
			context: {
				slug: node.slug,
			},
		})
	})
}