import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/base.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`, `hannah ingham`]} />
    <section className="section background-image" style={{ height: "100%" }}>
      <div className="has-text-centered" />
    </section>
  </Layout>
)

export default IndexPage
