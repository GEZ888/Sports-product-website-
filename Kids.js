import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default class Kids extends Component {
    render() {
        return (
            <>
                <Container>
            <h2 className="text-center m-4">Children's sport Fashion</h2>
            <div className="my-4">
            <Row xs={2} md={3} className="g-3">
      {Array.from({ length: 3 }).map((_, idx) => (
            <Col >
                <Card>
                    <Card.Img 
                    variant="top"
                    src="https://img.freepik.com/free-photo/sport-new-lifestyle-fashion-sneakers_1203-6399.jpg?w=740&t=st=1678725691~exp=1678726291~hmac=f8935d2204b207128c896113b4ffd7c9de807a28f5b7542087ed51cb1a532c1b"
                    alt="baby"
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
                    src="https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?w=740&t=st=1678725981~exp=1678726581~hmac=650f3ea06d57182d02d8bba027d414178aaabf64dc3593c8077e4742491ef214"
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
                    src="https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=740&t=st=1678726221~exp=1678726821~hmac=9188e3f0e79095333de9fa23e0b980723d2970125200dc490c3a7647095c9328"
                    alt="sneakers"
                    />
                    <Card.Body>
                        <Card.Title>LLL</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                        <Button variant="dark">More</Button>
                    </Card.Body>
                </Card></Col>
                
                
      ))}
                </Row>
            </div>
            </Container>
            </>
        
          
        )
    }
}