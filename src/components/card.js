import React from "react"

const Card = props => {
  console.log("image", props)
  return (
    <div className="card" style={{ margin: "2em 0" }}>
      <div className="card-header">
        <div className="card-header-title">{props.title}</div>
      </div>
      <div className="card-content columns">
      <div className="column is-one-quarter">
        <figure className="image is-200x100 column">
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
        <div className="card-content column is-two-quarters">{props.content}</div>
        <div className="content column is-one-quarter">
          {" "}
          <h3>Tools:</h3>
          <ul>
            {props.tools.split(" ").map((item, i) => {
              return <li key={{ i }}>{item}</li>
            })}
          </ul>
          {/* <a className="button is-link">Github</a> */}

        </div>

      </div>
      <footer className="card-footer has-background-warning">
    <a target="_blank"href={props.link} className="card-footer-item">Github</a>
    <a href="#" className="card-footer-item">Demo (coming soon)</a>
  </footer>
    </div>
  )
}

export default Card
