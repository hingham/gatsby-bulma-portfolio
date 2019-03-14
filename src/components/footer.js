import React from "react"


const Footer = class extends React.Component {
  render() {
    return (
      <footer classNameName="footer">
        <div classNameName="content has-text-centered">
          <div className="has-text-centered">
                <strong> Contact: </strong>
            </div>
            <div className="has-text-centered">
                hannah.c.ingham@gmail.com | 360-296-3167
            </div>
            <div> {"\u00A9"} Hannah Ingham </div>
        </div>
      </footer>
    )
  }
}

export default Footer
