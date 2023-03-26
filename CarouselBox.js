import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import bdgImg from '../assets/bdg.jpg';
import ballImg from '../assets/ball.jpg';
import figImg from '../assets/fig.jpg';
import CarouselCaption from "react-bootstrap/CarouselCaption";

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img 
                        className="d-block w-100"
                        height={600}
                        src={ bdgImg }
                        alt="Women"
                    />
                    <CarouselCaption>
                        <h3>Small steps to a big victory</h3>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-100"
                        height={600}
                        src={ ballImg }
                        alt="Ball"
                    />
                    <CarouselCaption>
                        <h3>Small steps to a big victory</h3>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-100"
                        height={600}
                        src={ figImg }
                        alt="sport"
                    />
                    <CarouselCaption>
                        <h3>Small steps to a big victory</h3>
                    </CarouselCaption>
                </Carousel.Item>
            </Carousel>
        )
    }
}