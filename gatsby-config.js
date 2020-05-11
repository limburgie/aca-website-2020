module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-source-datocms`,
			options: {
				// You can find your read-only API token under the Settings > API tokens
				// section of your administrative area:
				apiToken: `4a58b8091c641799785bae5128a86b`,

				// If you are working on development/staging environment, you might want to
				// preview the latest version of records instead of the published one:
				previewMode: false,

				// Disable automatic reloading of content when some change occurs on DatoCMS:
				disableLiveReload: false,
			},
		},
	]
}
