import React from "react"
import Layout from "../../components/layout"
import ContentCard from "../../components/content-card.js"
const Projects = props => {
  return (
    <Layout>
      <section className="hero has-background-info">
        <div className="hero-body">
          <div className="has-text-centered">
            <h1 className="title has-text-black">Hannah Ingham</h1>
            <h2 className="subtitle"> JavaScript React Developer</h2>
          </div>
        </div>
      </section>
      <ContentCard
      title="About Me:"
        content="Front end react developer with a background in teaching. Love building beautiful, powerful, and useful apps. Motivated to use technology as a way to connect people, empower consumers, and boost community engagement. Educational and professional background demonstrates aptitude to creatively solve problems and effectively address both team and client needs. "
        image="me.jpg"
      />

      <section className="section">
        <div className="has-text-centered">
          <h3
            className="is-size-4 has-text-weight-semibold"
            style={{ margin: "1em" }}
          >
            Technologies:
          </h3>
        </div>
        <div className="columns has-text-centered">
          <div className="column is-one-third">
            <ul>
              <li>JavaScript</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
              <li>Rest API</li>
            </ul>
          </div>
          <div className="column is-one-third">
            <ul>
              <li> EJS</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>React-redux</li>
              <li>Gatsby</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="column is-one-third">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Bulma</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
