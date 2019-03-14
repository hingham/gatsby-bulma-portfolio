import React from "react"
import { Link } from "gatsby"
import github from "../images/github.svg"

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveclassName: "",
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
        // set the className in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveclassName: "is-active",
            })
          : this.setState({
              navBarActiveclassName: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        classNameName="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div classNameName="navbar-brand">
          {/* Hamburger menu */}
          <div
            classNameName={`navbar-burger burger ${this.state.navBarActiveclassName}`}
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
          classNameName={`navbar-menu ${this.state.navBarActiveclassName}`}
        >
          <div classNameName="navbar-start has-text-centered">
            <Link classNameName="navbar-item" to="/">
              Home
            </Link>
            <Link classNameName="navbar-item" to="/about">
              About
            </Link>
            <Link classNameName="navbar-item" to="/projects">
              Projects
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a
              classNameName="navbar-item"
              href="https://github.com/hingham/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span classNameName="icon">
                <img src={github} alt="Github" style={{ width: "2em" }} />
              </span>
            </a>{" "}
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
