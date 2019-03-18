import React from "react"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

const Card = props => {
  console.log("image", props)
  return (
    <div className="card" style={{ margin: "2em 0" }}>
      <div className="card-content columns">
        <div className="column is-one-third">
          <figure className="image is-128x128">
            <img
              alt={props.title}
              src={require(`../images/${props.image}`)}
              style={{
                width: "170px",
                border: "2px solid gray",
                borderRadius: "3px",
              }}
            />
          </figure>
        </div>
        <div className="card-content column is-two-thirds">
          {props.content}
        </div>
      </div>
      <footer className="card-footer has-background-warning">
        <a target="_blank" href="https://github.com/hingham" className="card-footer-item">
          <span className="icon">
            <img src={github} alt="Github" style={{ margin: "0", width: "2em" }} />
          </span>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/hannah-ingham/" className="card-footer-item">
          <span className="icon">
            <img src={linkedin} alt="Linkedin" style={{ margin: "0", width: "2em" }} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Card
