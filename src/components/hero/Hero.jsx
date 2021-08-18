import React from 'react'
import { Container } from 'react-bootstrap'
import './Hero.scss'

const Hero = () => {
    return (
        <Container fluid className="main-hero-container">
            <div className="wrapper">
                <h4 className="main-heading">
                    We are revolutionising the legacy of collecting physical cards into a digital one which will awaken the fan within you.
                </h4>
                <div className="sub-text">
                Fascinated by beautiful pieces of digital art and at the same time intrigued by growing technologies like NFTs and Ethereum mining? You have landed at the right place! Our platform serves as the perfect juncture for trading genuine art in the form of hand-curated NFTs made individually by artists using various software like Illustrator, Blender, etc. Be ready to witness unique themes like never before in the NFT marketplace and that too for a limited period, all based on Ethereum! All of the NFTs would be public and available on IPFS. This will enable our company to create a niche for itself and also benefit skillful digital artists. 
                </div>
            </div>
        </Container>
    )
}

export default Hero
