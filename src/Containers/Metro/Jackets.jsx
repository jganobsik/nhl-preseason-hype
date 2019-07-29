import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
    height: '500px'
}
const carouselStyle={
padding: '20px',
height: '800px'
}


export default class Jackets extends Component {
    render() {
        return (
            <>
            <div style={cbjStyling}>
            <Container>
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
                  <DotGroup />
              </CarouselProvider>
              </Container>
              </div>
              <div style={cbjStyling} >
                
              </div>
              </>
        );
    }
}