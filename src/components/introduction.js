import React from 'react'
import Me from '../images/me.jpg'

const Introduction = props => {
  return (
    <section className="section has-background-primary has-text-white" style={{height: "100%"}}>
      <div className="has-text-centered">
      <div className="is-size-3">Hello!</div>
      <div className="is-size-4">I'm Hannah</div>
        <img alt="Hannah Ingham" src={Me} style={{width: '100px', borderRadius: '200px'}}/>
        </div>
        <div style={{padding: "1em"}}>
        <p >
        Former high school math teacher, now JavaScript developer. With a masters degree in teaching a technical certificate from CodeFellow's Advanced Full Stack JavaScript course I bring experience, vision, and enthusiam.     
        </p>
        <br></br>
        <p >
        Currently looking for opportunities where I feel I can be part of a larger effort to support students and teachers.
        </p>
    
        </div>
      
    </section>
  )
}

export default Introduction;
