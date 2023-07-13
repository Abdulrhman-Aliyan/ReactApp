import './Header.css';

import logo from '../../assets/images/logo.png';
import NavItem from '../../components/NavItem/NavItem';
import {NavItemDropDown} from '../../components/NavItem/NavItem';

const Header = (props) => {
  return (
  <div className="navbar navbar-expand-md navbar-dark my-navbar">
    <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <NavItem><a href="#hero" className="nav-link">Home</a></NavItem>
                <NavItem><a href="#features" className="nav-link">Browse</a></NavItem>
                <NavItemDropDown>
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                    <ul className="dropdown-menu">
                        <NavItem><a href="#learn" className="dropdown-item">Fortnite</a></NavItem>
                        <NavItem><a href="#next" className="dropdown-item">Call Of Duty</a></NavItem>
                    </ul>
                </NavItemDropDown>
                <NavItem><a href="#faq" className="nav-link">Stream</a></NavItem>
                <NavItem><a href="#" className="nav-link">Profile</a></NavItem>
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Header