import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default class Women extends Component {
    render() {
        return (
            <>
            <Container>
        <h2 className="text-center m-4">For dear women</h2>
        <div className="my-4">
        <Row xs={2} md={3} className="g-3">
  {Array.from({ length: 3 }).map((_, idx) => (
        <Col >
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/side-view-of-athletic-woman-in-gym-outfit-doing-crunches_23-2148398851.jpg?size=338&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
                alt="baby"
                />
                <Card.Body>
                    <Card.Title>DDD</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                    <Button variant="warning">More</Button>
                </Card.Body>
            </Card>
        
        
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/dumbbells-and-towel-on-colorful-background_23-2147735031.jpg?size=338&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
                alt="sneakers"
                />
                <Card.Body>
                    <Card.Title>MMM</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                    <Button variant="warning">More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/bright-neon-fashion-portrait-of-cheeky-trendy-woman-leather-jacket-backpack-young-model_291049-889.jpg?size=338&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
                alt="sneakers"
                />
                <Card.Body>
                    <Card.Title>LLL</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                    <Button variant="warning">More</Button>
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