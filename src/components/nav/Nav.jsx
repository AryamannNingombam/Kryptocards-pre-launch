import React, { useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Nav.scss'
import logo from '../../images/stLogo.svg'
import { Link } from 'react-router-dom'
import RotatingLogo from '../rotatingLogo/RotatingLogo';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    window.addEventListener("scroll", changeBackground);

    return (
        <Container style={{
            // background:navbar ? "rgba(255,255,255,0.3)" : "transparent",
            // boxShadow:navbar ? "rgba(0, 0, 0, 0.1) 0px 4px 12px" : "none",
    // backdropFilter:navbar ?  "blur(10px)" : "none",
    top: navbar ? "-64px" : "0",
            

        }} fluid className="main-nav-cont p-0">
            <div className="main-nav-wrapper">
                <Link to="/" className="logo-sec">
                    <RotatingLogo className="logo"/>
                </Link>
                <div className="main-nav">
                    <div className="nav-item">
                        <Link to="/projects" className="link">Projects</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/about" className="link">About</Link>
                    </div>
            
                </div>
            </div>
        </Container>
    )
}

export default Nav
