import { useState,useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { NavLink } from 'react-router-dom'
import Call from './icon/call.svg'
import Mail from './icon/mail.svg'
import Facebook from './icon/facebook.svg'
import Instagram from './icon/instagram.svg'
import Menu from './icon/menu.png'
import Logo from './icon/logo3.png'
import './header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  function handleEmailClick(e) {
    e.preventDefault();
    window.location.href = e.target.href;
  }
  const logoutUser = async () =>{
    await axios.get('/user/logout')

    localStorage.removeItem('firstLogin')
    
    window.location.href = "/";
  }

const adminRouter = () =>{
    return(
        <>
           <li><NavLink to="/create_product">Add</NavLink></li>
           <li><NavLink to="/category">Categories</NavLink></li>
        </>
    )
}

const loggedRouter = () =>{
    return(
        <div class="user">
            <div class="user1">
                <li><NavLink to="/" onClick={logoutUser}>Logout</NavLink></li>
            </div>
        </div>
    )
}

return (
  <>
  <div className="info">
    <div className="contact">
      <ul>
        <a href='#'><img src={Call} width="20px"/>9876543210</a>
        <a href="#"><img src={Call} width="20px"/>9876543210</a>
        <a href="mailto:srisendhursteels.com" onClick={handleEmailClick}><img src={Mail} width="20px"/>srisendhursteels@gmail.com</a>
      </ul>
    </div>
    <div className="socialmedia">
      <ul>
        <a href='#'><img src={Instagram} width="20px"/></a>
        <a href="#"><img src={Facebook} width="20px"/></a>
      </ul>
    </div>
  </div>
  <nav className="navbar">
    <div className="navbar1">
      <div className="logo">
        <img src={Logo} width="70px" />Sri Sendhur Steels
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Menu} width="20px"/>
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">{isAdmin ? '':"Home"}</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{isAdmin ? '':"Contact"}</NavLink>
          </li>
          {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : <li><NavLink to="/login">Login</NavLink></li>
                }

        </ul>
        {/* {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        Cart
                    </Link>
                </div>
            } */}
      </div>
    </div>
  </nav>
  </>
)
}

export default Header;