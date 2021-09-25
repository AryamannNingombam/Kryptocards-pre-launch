import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Nav.scss'
import logo from "../../images/stLogo.svg"
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose } from 'react-icons/md'
import RotatingLogo from '../rotatingLogo/RotatingLogo';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false)
    const [screen, setScreen] = useState(false)



    const openSidebar = () => {
        setToggle(true)
    }

    const closeSidebar = () => {
        setToggle(false)
    }

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        const changeWidth = () => {
            if (window.innerWidth <= 786) {
                setScreen(true)
            } else {
                setScreen(false)
            }
        }

        changeWidth()
        window.addEventListener('resize', changeWidth)
    })

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <Container style={{
                // background:navbar ? "rgba(255,255,255,0.3)" : "transparent",
                // boxShadow:navbar ? "rgba(0, 0, 0, 0.1) 0px 4px 12px" : "none",
                // backdropFilter:navbar ?  "blur(10px)" : "none",
                top: navbar ? "-64px" : "0",
            }} fluid className="main-nav-cont p-0">
                <div className="main-nav-wrapper">
                    <Link to="/" className="logo-sec">
                        <RotatingLogo/>
                    </Link>
                    <div  style={{
                            display: screen ? 'none' : 'flex',
                        }} className="main-nav">
                        <div className="nav-item">
                            <Link to="/about" className="link">About</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/projects" className="link">Projects</Link>
                        </div>
                    </div>
                    <div
                        style={{
                            display: !screen ? 'none' : 'block',
                        }}
                        className="hamburger"
                    >
                        <IoMenu onClick={openSidebar} className="menu-icon" />
                    </div>
                </div>
            </Container>
            <AnimatePresence>
        {toggle && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: toggle && screen ? 'block' : 'none',
            }}
             className="side-nav-cont p-0">
                 <div className="close-sec">
              <MdClose onClick={closeSidebar} className="close-icon" />
            </div>
                <div className="side-nav-wrapper">
                    <div className="main-nav">
                    <div className="nav-item">
                            <Link to="/" className="link">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/about" className="link">About</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/projects" className="link">Projects</Link>
                        </div>
                       
                    </div>
                </div>
            </motion.div>
        )}
        </AnimatePresence>


        </>
    )
}

export default Nav
