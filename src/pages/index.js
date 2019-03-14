import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/base.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="section background-image" style={{height:"100%"}}>
    <div className="has-text-centered" >
      
    </div>
    </section>
  </Layout>
)

export default IndexPage
