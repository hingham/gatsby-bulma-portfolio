import React from "react"
import Layout from "../../components/layout"
import ContentCard from "../../components/content-card.js"
import resumePageOne from "../../images/resume-page-1.png"
import resumePageTwo from "../../images/resume-page-2.png"

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
        content="Hello! I'm a frontend react developer with a background in teaching. I love building beautiful, powerful, and useful apps. I love working in technology because technolgy connects people, empowers consumers, and boosts community engagement. My educational and professional background demonstrate ability to creatively solve problems and effectively address both team and client needs."
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
      <section>
        <div class="card">
          <div class="card-header has-text-centered">
            <div class="card-header-title is-centered">Resume</div>
          </div>
          <a
              target="_blank"
              href="https://drive.google.com/file/d/1ZP1L4uA8LY9OqCAOhQVgzDEJ3a85-sE8/view?usp=sharing"
            >
          <div className="card-image columns" style={{margin: "0 1em"}}>
           
              <figure class="image column is-one-half">
                <img
                  src={resumePageOne}
                  style={{ border: "2px solid lightGray" }}
                />
              </figure>
              <figure class="image column">
                <img
                  src={resumePageTwo}
                  style={{ border: "2px solid lightGray" }}
                />
              </figure>
            
          </div>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
