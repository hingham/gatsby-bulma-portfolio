import React from "react"
import Me from "../images/profile-distance.jpg"

const Introduction = props => {
  return (
    <section 
      id="introduction"
      className="section has-background-primary has-text-white"
      style={{ height: "100%" }}
    >
      <div className="has-text-centered">
        <div className="is-size-3">Hello!</div>
        <div className="is-size-4">I'm Hannah.</div>
        <img
          alt="Hannah Ingham"
          src={Me}
          style={{ width: "150px", borderRadius: "200px", marginTop: "20px" }}
        />
      </div>
      <div style={{ padding: "1em" }}>
        <p>
          Former high school math teacher, now JavaScript developer. Offer
          diverse experience, vision, and enthusiam. Enjoy working on
          collaborative teams to build beautifully functional websites.
        </p>
        <br />
        <p>
          Currently looking seeking job opportunties to build out websites to
          serve clients, companies, and communities.
        </p>
      </div>
    </section>
  )
}

export default Introduction
