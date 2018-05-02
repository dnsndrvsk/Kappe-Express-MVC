import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Filter from './Filter'
import SocialLinks from './SocialLinks'
import logoSrc from '../assets/logo.png'
import '../styles/components/MainNav.scss'

const links = [
  { isExact: true,  linkTo: '/home',     text: 'Home'     },
  { isExact: false, linkTo: '/about',    text: 'About'    },
  { isExact: true,  linkTo: '/blog',     text: 'Blog'     },
  { isExact: false, linkTo: '/services', text: 'Services' },
  { isExact: false, linkTo: '/contact',  text: 'Contact'  },
  { isExact: false, linkTo: '/updates',  text: 'Updates'  }
]


class MainNav extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      isHome: true,
      isVisibleClassAdded: false
    }
  }
  
  onNavLinkClick = () => {
    if (this.state.isVisibleClassAdded) this.removeVisible()
  }
  
  addVisible = () => {
    this.setState({ isVisibleClassAdded: true })
  }
  
  removeVisible = () => {
    this.setState({ isVisibleClassAdded: false })
  }
  
  componentDidMount() {
    this.ifHomeCheckTimerID = setInterval(this.checkIfHome, 200)
  }

  componentWillUnmount() {
    clearInterval(this.ifHomeCheckTimerID)
  }

  checkIfHome = () => {
    if(!this.state.isHome && this.location === '/home') {
      this.setState({ isHome: true })
    }
    if(this.state.isHome && this.location !== '/home') {
      this.setState({ isHome: false })
    }
  }
  
  oddEvent = (match, location) => {
    if (!match) {
      return false
    } else {
      this.location = match.url
      return true
    }
  }
  
  render () {
    return (
      <header className={
          this.state.isVisibleClassAdded
          ? "main-header main-header--visible"
          : "main-header"
        }
      >
        <div className="main-header__logo">
          <img src={logoSrc} alt="Kappe" />
        </div>
        
        <div className="main-header__show-btn-wrap">
          <button
            className="main-header__show-btn button"
            type="button"
            onClick={this.addVisible}
          >
            Show Menu
          </button>
        </div>
        
        <nav className="main-header__nav">
          <ul className="main-header__nav-list">
            {links.map((link, i) => {
              return (
                <li className="main-header__nav-item" key={i}>
                  <NavLink
                    className="main-header__nav-link"
                    activeClassName="main-header__nav-link--active"
                    to={link.linkTo}
                    onClick={this.removeVisible}
                    isActive={this.oddEvent}
                  >
                    {link.text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {this.state.isHome && <Filter />}
        
        <SocialLinks />
        
        <p className="main-header__copyright">
          © 2014 Kappe, All Rights Reserved
        </p>
      </header>
    )
  }
}

export default MainNav