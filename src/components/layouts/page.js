import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Fonts from '../../scss/style'
import '../../scss/main.scss'
import ico from '../../assets/logos/favicon.ico'

import Menu from '../layouts/Menu'

export default ({ children }) => {

  const data = useStaticQuery(graphql`
		query PageTitleQuery($path: String!) {
			markdownRemark(frontmatter: { path: { eq: $path } }) {
				frontmatter {
					path
					title
				}
			}
			site {
				siteMetadata {
					title
				}
			}
		}`
  )

  let pageTitle = data.markdownRemark ? data.markdownRemark.frontmatter.title : null
  const title = pageTitle ? pageTitle : data.site.siteMetadata.title

  return (
    <>
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={''} />
      <meta rel="icon" href={ico} />
      <title>{title}</title>
      <style>{Fonts}</style>
    </Helmet>
      <div id="viewport-container">{children}</div>
      <Menu />
    </>
  )
}
