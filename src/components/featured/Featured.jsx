import React, { useEffect, useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Featured.scss'
import solar2 from '../../images/2.svg'
import {useNavigate } from 'react-router-dom'

const Featured = () => {

    const itemsRef = useRef()
    let html = document.documentElement
    const navigate = useNavigate();
    useEffect(async() => {
        
        let itemsArray = await Array(itemsRef.current)
        console.log(itemsArray)

        let scrollAmt = html.scrollTop;
        let scrollMax = html.scrollHeight - window.innerHeight;
    
        let input = {
            scrollY: {
                start: 0,
                end: html.scrollHeight - window.innerHeight,
                current: 0,
            },
            mouseX: {
                start: 0,
                end: window.innerWidth,
                current: 0,
            },
            mouseY: {
                start: 0,
                end: window.innerHeight,
                current: 0
            }
        }
    
        let output = {
            x: {
                start: -150,
                end: 150,
                current: 0
            },
            y: {
                start: -150,
                end: 150,
                current: 0
            },
            scrollY: {
                start: 0,
                end: 300,
                current: 0
            },
            zIndex: {
                range: 1000
            },
            scale: {
                start: 1,
                end: 0.3,
            },
            blur: {
                startingDepth: 0.9,
                range: 5
            }
        }
    
        output.scale.range = output.scale.end - output.scale.start
        output.x.range = output.x.end - output.x.start
        output.y.range = output.y.end - output.y.start
        output.scrollY.range = output.scrollY.end - output.scrollY.start
    
    
    
        input.scrollY.range = input.scrollY.end - input.scrollY.start;
        input.mouseX.range = input.mouseX.end - input.mouseX.start;
        input.mouseY.range = input.mouseY.end - input.mouseY.start;
    
        let mouse = {
            x: window.innerWidth * 0.5,
            y: window.innerHeight * 0.5
        }
    
    
        const updateInputs = () => {
            input.mouseX.current = mouse.x;
            input.mouseY.current = mouse.y;
    
            input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / (input.mouseX.range)
            input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / (input.mouseY.range)
    
            input.scrollY.current = html.scrollTop;
            input.scrollY.fraction = (input.scrollY.current - input.scrollY.start) / input.scrollY.range;
        }
    
    
        const updateOutputs = () => {
    
            output.x.current = output.x.end - (input.mouseX.fraction * output.x.range);
            output.y.current = output.y.end - (input.mouseY.fraction * output.y.range);
    
            output.scrollY.current = output.scrollY.start + (input.scrollY.fraction * output.scrollY.range);
    
        }
    
    
        const updateEachParallaxItem = () => {
    
            itemsArray.forEach((item, i) => {
                let depth = parseFloat(item.dataset.depth, 10);
    
                let itemInput = {
                    scrollY: {
                        start: item.offsetTop,
                        end: item.offsetTop + window.innerHeight
                    }
                }
    
                itemInput.scrollY.range = itemInput.scrollY.end - itemInput.scrollY.start;
                itemInput.scrollY.fraction = (input.scrollY.current - itemInput.scrollY.start) / itemInput.scrollY.range;
    
                let itemOutputYCurrent = output.y.start + (itemInput.scrollY.fraction * output.y.range);
    
    
                let itemOutput = {
                    x: output.x.current - (output.x.current * depth),
                    y: (itemOutputYCurrent * depth) + (output.y.current - (output.y.current * depth)),
                    zIndex: output.zIndex.range - (output.zIndex.range * depth),
                    scale: output.scale.start + (output.scale.range * depth),
                    blur: (depth - output.blur.startingDepth) * output.blur.range,
                }
                item.style.filter = `blur(${itemOutput.blur}px)`
                item.style.zIndex = itemOutput.zIndex;
                item.style.transform = `translate(${itemOutput.x}px,${itemOutput.y}px) rotate(90deg)`
    
            })
        }
    
    
        const handleMouseMove = (event) => {
            mouse.x = event.clientX
            mouse.y = event.clientY
    
            updateInputs()
            updateOutputs()
            updateEachParallaxItem()
        }
    
        const handleResize = (event) => {
            input.mouseX.end = window.innerWidth;
            input.mouseY.end = window.innerHeight;
    
            input.mouseX.range = input.mouseX.end - input.mouseX.start;
            input.mouseY.range = input.mouseY.end - input.mouseY.start;
    
            input.scrollY.end = html.scrollHeight - window.innerHeight
            input.scrollY.range = input.scrollY.end - input.scrollY.start;
        }
    
        const handleScroll = () => {
            updateInputs()
            updateOutputs()
            updateEachParallaxItem()
        }
    
    
        // window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)
        

    },[itemsRef])


    const goToURL = (url)=>{
        navigate(url);
    }



   

    return (
        <Container fluid className="main-featured-cont px-0">
            <div className="featured-wrapper">
                <div className="header">
                    <h5 className="heading">Featured Projects</h5>
                </div>
                <div className="main-body">

                  <div className="blur-body" />
                  <h2 className="soon">Coming Soon</h2>
                    <div className="pro-1"  onClick={e=>{goToURL('/')}}>
                        <Image src={solar2} className="picture" />
                        <div  className="title">Moonnets</div>
                    <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sem sapien.</div>
                    </div>
                    {/* <div className="pro-2"  onClick={e=>{goToURL('/')}}>
                        <Image src={planetsImage} className="picture" />
                        <div  className="title">Planets</div>
                        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sem sapien.</div>
                    </div> */}
              
        
                </div>
            </div>
            <div ref={itemsRef}  className="all-projects" data-depth="0.7">View all projects</div>
        </Container>
    )
}

export default Featured
