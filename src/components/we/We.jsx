import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './We.scss'

const We = () => {
  return (
    <Container fluid className="main-who-are-we-sec px-0">
      <div className="wrapper">
        <h5 className="heading">Who are we</h5>
        <div className="the-text">
          We are one of the first projects in India working towards
          revolutionizing NFTs. We solve the mind-boggling issue of the high gas
          fee that goes behind uploading a project by formulating our own smart
          contracts. We aspire to get India ahead in the technological race with
          the global world by inculcating ingenious ideas in growing
          technologies such as NFTs. We also aim towards widening and increasing
          the consumer base for NFTs by conjoining these cards with something
          interdisciplinary and thereby convolve a new perspective for crypto
          trading over and beyond just buying or selling. Being an
          environmentally conscious team that wants to bring about a societal
          impact, we plan to plant 100 trees for each auctioned (the
          “elitist”) card purchase!
        </div>
        <div className="know-button-wrapper">
        <Link to="/about" className="know-btn">
          Know more about us
        </Link>
        </div>
      
      </div>
    </Container>
  )
}

export default We
