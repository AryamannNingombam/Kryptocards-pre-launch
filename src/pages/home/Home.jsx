import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import './Home.scss'
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero'
import Featured from '../../components/featured/Featured'
import We from '../../components/we/We'
import Footer from '../../components/footer/Footer';
import Scrollbar from 'smooth-scrollbar';

const Home = () => {
     
    return (<>
            <Nav />
        <Container fluid className="main p-0">
            <Hero />
            <Featured />
            <We />
            <Footer />
        </Container>
        </>
    )
}

export default Home
