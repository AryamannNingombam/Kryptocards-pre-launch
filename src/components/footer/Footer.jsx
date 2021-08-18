import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Footer.scss'
import logo from '../../images/stLogo.svg'
import {FaDiscord,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import RotatingLogo from '../rotatingLogo/RotatingLogo'


const Footer = () => {
    return (
        <Container fluid className="main-footer-container px-0">
            <div className="wrapper">
            <div className="lofo-sec">
                <RotatingLogo/>
                <span className="text">
                Kryptocards &copy; 2021
                </span>
            
                
            </div>

            
            </div>
        </Container>
    )
}

export default Footer
