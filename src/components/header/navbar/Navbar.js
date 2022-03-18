import React, { Component } from 'react'
import '../../../style/header/navbar/Navbar.css'
import { MenuItems } from './MenuItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className='navbarItems'>
        <h2 className='navbar-logo'>GurvanB</h2>
        <div className='menu-icon' onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} className='burgerMenu'/>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url} onClick={this.handleClick}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar