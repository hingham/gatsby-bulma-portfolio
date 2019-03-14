import React from "react"

const Card = props => {
  console.log("image", props)
  return (
    <div className="card" style={{ margin: "2em 0" }}>
      <div className="card-content columns">
      <div className="column is-one-quarter">
        <figure className="image is-128x128 column">
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
        <div className="card-content column is-three-quarters">{props.content}</div>
       
      </div>
    
    </div>
  )
}

export default Card
