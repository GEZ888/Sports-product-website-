import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";

import { Container,CardGroup, Card, Button, Row, } from "react-bootstrap";


export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
            <h2 className="text-center m-4">Recommended</h2>
            <CardGroup className="m-4">

            <Row md={3}>
            
                <Card>
                    <Card.Img 
                    variant="top"
                    src="https://mcmag.ru/wp-content/uploads/2020/05/air-jordan-1-chicago-pobili-rekord-samyh-dorogih-krossovok-v-mire-01-molodezhnyj-czentr-mcmag.ru_-e1589789830856.jpg"
                    alt="sneakers"
                    />
                    <Card.Body>
                        <Card.Title>DDD</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                        <Button variant="dark">More</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img 
                    variant="top"
                    src="https://fineshoes.ru/upload/iblock/cf3/krossovki-nike-blazer-stussy.jpg"
                    alt="sneakers"
                    />
                    <Card.Body>
                        <Card.Title>MMM</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                        <Button variant="dark">More</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img 
                    variant="top"
                    src="https://prosneakers.ru/uploads/posts/2023-02/nike-dunk-low-oregon-ducks-dv0833-300-1.webp"
                    alt="sneakers"
                    />
                    <Card.Body>
                        <Card.Title>LLL</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                        <Button variant="dark">More</Button>
                    </Card.Body>
                </Card>
             
                </Row>
            </CardGroup>
            </Container>
            </>
        );
    }
}