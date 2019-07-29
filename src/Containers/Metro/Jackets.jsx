import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from '../../Components/Footer'
import Image from 'react-bootstrap/Image'
import '../../Stylesheets/containers.css'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
const cbjStyling = {
    backgroundColor: '#05326B'
}

const slide1 = {
    backgroundColor: '#022B59',
    minHeight: '600px'
}
const carouselStyle = {
padding: '20px',
height: '700px'
}



export default class Jackets extends Component {
    render() {
        return (
            <>
            <div style={cbjStyling}>
            <Container>
            <Row>
            <Col md={{ span: 6, offset: 5 }}>
            <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/220px-Columbus_Blue_Jackets_logo.svg.png"></Image>
            </Col>
            </Row>
            <Row>
            <Col md={{span: 6, offset: 4}}>
            <h1 className="whiteHeader">Columbus Blue Jackets</h1>
            </Col>
            </Row>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={500}
                totalSlides={3}
              >
                <Slider style={carouselStyle}>
                  <Slide index={0}><div style={slide1}><Container><Row>
                  <Col> 1</Col>
                  <Col> 2</Col>
                  
                  
                  
                  </Row></Container></div></Slide>
                  <Slide index={1}>I am the second Slide.</Slide>
                  <Slide index={2}>I am the third Slide.</Slide>
                  </Slider>
                  <DotGroup className="centeredMenu" />
              </CarouselProvider>
              </Container>
              </div>
              <div>
            <Footer />
              </div>
              </>
        );
    }
}