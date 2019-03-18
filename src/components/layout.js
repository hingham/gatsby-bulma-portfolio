/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header.js"
import Nav from "./nav.js"
import Introduction from "./introduction.js"

import Footer from "./footer.js"
import "./layout.css"
import "./styles/all.sass"
import "./styles/base.sass"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Nav />

        <div className="columns">
        <div className="column is-one-third">
            {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
            <Introduction/>
          </div>
          <div className="column is-two-thirds" style={{padding: "0em 3em"}} >
          {children}
          </div>
        </div>

       <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
