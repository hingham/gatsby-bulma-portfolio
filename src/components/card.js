import React from "react"

const Card = props => {
  console.log("image", props)
  return (
    <div className="card" style={{ margin: "2em 0" }}>
      <div className="card-header">
        <div className="card-header-title">{props.title}</div>
      </div>
      <div className="columns" style={{margin: "1em"}}>
      <div className="column is-one-half">
      <figure class="image">
          <img
            alt={props.title}
            src={require(`../images/${props.image}`)}
            style={{
              margin: "0 1em",
              width: "250px",
              border: "2px solid gray",
              borderRadius: "3px",
            }}
          />
           </figure>
        </div>

        <div className="content column">
          {" "}
          <h3>Tools:</h3>
          <ul>
            {props.tools.split(" ").map((item, i) => {
              return <li key={{i}+{i}}>{item}</li>
            })}
          </ul>
        </div>
        </div>

        <div className="card-content" style={{paddingTop: "0"}}>{props.content}</div>
       
       
      
      <footer className="card-footer has-background-warning">
    <a target="_blank"href={props.link} className="card-footer-item">Github</a>
    {props.frontend ? 
    <a target="_blank"href={props.frontend} className="card-footer-item">Frontend</a>
    : null }
    {props.backend ? 
    <a target="_blank"href={props.backend} className="card-footer-item">Backend</a>
    : null }
  </footer>
    </div>
  )
}

export default Card
