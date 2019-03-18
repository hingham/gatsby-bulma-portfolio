import React from "react"


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" >
        <div className="content has-text-centered">
          <div className="has-text-centered">
                <strong> Contact: </strong>
            </div>
            <div className="has-text-centered">
                hannah.c.ingham@gmail.com
            </div>
            <div className="has-text-centered"> {"\u00A9"} Hannah Ingham </div>
        </div>
      </footer>
    )
  }
}

export default Footer
