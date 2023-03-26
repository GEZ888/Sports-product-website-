import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default class Promotion extends Component {
    render() {
        return (
            <>
            <Container>
        <h2 className="text-center m-4">Products with 60% discount</h2>
        <div className="my-4">
        <Row xs={2} md={3} className="g-3">
  {Array.from({ length: 3 }).map((_, idx) => (
        <Col >
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-vector/realistic-orange-yoga-rug-mat-icons-set-isolated-vector-illustration_1284-79042.jpg?size=626&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
                alt="baby"
                />
                <Card.Body>
                    <Card.Title>DDD</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                    <Button variant="danger">More</Button>
                </Card.Body>
            </Card>
        
        
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/friends-with-colorful-outfits-posing_23-2149348502.jpg?size=626&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
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
                src="https://img.freepik.com/free-photo/happy-young-tennis-player-showing-tennis-ball_171337-15436.jpg?size=626&ext=jpg&ga=GA1.1.1376812356.1678719358&semt=ais"
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