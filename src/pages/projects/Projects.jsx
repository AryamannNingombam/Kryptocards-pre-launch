import React from 'react'
import './Projects.scss'
import { Container, Image } from 'react-bootstrap'
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav'
import solar2 from '../../images/2.svg'

const Projects = () => {
    return (
        <>
        <Nav />
        <Container fluid className="main-projects-container">
            <div className="main-projects-wrapper">
                <div className="all-projects">
                    <div className="blur" />
                    <h3 className="soon">Coming Soon</h3>
                    <div className="project">
                        <Image src={solar2} className="poster" />
                        <div className="project-name">Moonnets</div>
                        <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ut veniam animi eveniet. Deleniti cupiditate dolorum nulla, expedita incidunt quisquam cumque quia ipsam quaerat cum rem ratione officiis odit fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolores.</p>
                    </div>
                </div>
                <div className="more-pro">
                    More cool projects cooking up
                </div>
            </div>
        </Container>
        <Footer />
        </>
    )
}

export default Projects
