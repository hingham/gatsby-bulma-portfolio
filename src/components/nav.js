import React from "react"
import { Link } from "gatsby"
import github from "../images/github.svg"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          {/* Hamburger menu */}
          <a
              className="navbar-item"
              href="https://github.com/hingham/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" style={{ width: "2em" }} />
              </span>
            </a>{" "}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/projects">
              Projects
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {/* <a
              className="navbar-item"
              href="https://github.com/hingham/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" style={{ width: "2em" }} />
              </span>
            </a>{" "} */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
