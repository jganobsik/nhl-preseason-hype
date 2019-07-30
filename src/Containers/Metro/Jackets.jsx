import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from '../../Components/Footer'
import Image from 'react-bootstrap/Image'
import GridContainer from "../../Components/Grid/GridContainer.jsx";
import GridItem from "../../Components/Grid/GridItem.jsx";
import '../../Stylesheets/containers.css'
import VerticalVideos from '../../Components/VerticalVideos'
import {
    Container,
    Row,
    Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'
import LazyHero from 'react-lazy-hero';


const slide1 = {
    backgroundColor: '#022B59',
    backgroundImage: "url(" + "" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const slide2 = {
    backgroundColor: '#FF3333',
}

const slide3 = {
    backgroundColor: '#FFFFFF',
}



export default class Jackets extends Component {
    render() {
        return (
            <>
            <div className="dark_gray">
            <LazyHero imageSrc="https://unsplash.it/2000/1000">
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className="">March With Us</h1>
                <h4>
               After defeating the Tampa Bay Lightning to move past the first round of the Stanley Cup Playoffs for the first time in franchise history, the Jackets look to build off last year's success with their young core and a host of new faces in the locker room for the 2019-20 season.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                >
                  <i className="fas fa-play" />
                  2018-2019 Highlights
                </Button>
              </GridItem>
            </GridContainer>
            </LazyHero>
            <Container>
            <Row>
            
            <div>
            <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/220px-Columbus_Blue_Jackets_logo.svg.png"></Image>
            <h1 className="whiteHeader">Columbus Blue Jackets</h1>
            </div>
            </Row>
            <Row>
            </Row>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={500}
                totalSlides={3}
              >
                <Slider style={{height: '700px'}}>
                  <Slide index={0}><div className="hover" style={slide1}><Container><Row>
                  <Col> 
                  </Col>
                  <Col>  <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card></Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="whiteHeader"> Quick Facts</h1>
                  <br /><h3>Founded: 2000</h3> <br />
                  <h3>City: Columbus, Ohio</h3><br />
                  <h3>Head Coach: John Tortorella</h3><br />
                  <h3>Captain: Nick Foligno</h3><br />
                  </Col>
                  </Row>
                  </Container></div></Slide>
                  <Slide index={1}><div className="hover" style={slide2}> <VerticalVideos /> </div>  </Slide>
                  <Slide index={2}><div className="hover" style={slide3}> 3</div></Slide>
                  </Slider>
                  <div className="centeredMenu">
                  <Dot slide={0} />
                  <Dot slide={1} />
                  <Dot slide={2} />
                  </div>
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