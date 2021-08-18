import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './About.scss'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import pro from '../../images/pro.svg'

const About = () => {
    return (
        <>
            <Nav />
            <Container fluid className="main-about-container p-0">
                <div className="main-about-wrapper">
                    <h1 className="title">Hola!</h1>
                    <div className="about-txt">
                        <p className="txt-1">
                           <span className="hi">Meet the team of Krypto Cards,</span> a bunch of enthusiastic and talented sophomores who share an immense passion for emerging technologies. The co-founders of this start-up, Zeus, Kratos, Thanatos, and Plutus are students who ideated this spontaneous thought of amalgamating digital art & NFTs and launch it into the company it is today. We also comprise an extremely creative and astute graphic design and marketing team. In our pursuit to encourage women's participation in technology, the gender ratio of our team is almost 50-50! As a team, we hope to set ourselves apart from our contemporaries and set the conception of successful blockchain technology initiatives in India .
                        </p>
                    </div>
                    <div className="profile-sec">
                        <div className="profile">
                            <div className="profile-image" />
                            <div className="name">Zeus</div>
                            <div className="desig">Founder, CEO</div>
                        </div>
                        <div className="profile">
                            <div className="profile-image" />
                            <div className="name">Kratos</div>
                            <div className="desig">Co-Founder, COO</div>
                        </div>
                        <div className="profile">
                            <div className="profile-image" />
                            <div className="name">Thanatos</div>
                            <div className="desig">Co-Founder, CTO</div>
                        </div>
                        <div className="profile">
                            <div className="profile-image" />
                            <div className="name">Plutus</div>
                            <div className="desig">Co-Founder, CMO & CFO</div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default About;
