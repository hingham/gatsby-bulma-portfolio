import React from "react"
import Card from "./card.js"

const CardList = props => {
  return (
    <div>
      {props.projects.map((project, i) => {
        return (
          <Card key={{i}}
            title={project.node.frontmatter.title}
            content={project.node.rawMarkdownBody}
            image={project.node.frontmatter.image}
            link={project.node.frontmatter.link}
            frontend={project.node.frontmatter.frontend}
            backend={project.node.frontmatter.backend}
            tools={project.node.frontmatter.tools}
          />
        )
      })}
    </div>
  )
}

export default CardList
