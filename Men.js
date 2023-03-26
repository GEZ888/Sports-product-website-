import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default class Men extends Component {
    render() {
        return (
            <>
            <Container>
        <h2 className="text-center m-4">For sports man</h2>
        <div className="my-4">
        <Row xs={2} md={3} className="g-3">
  {Array.from({ length: 3 }).map((_, idx) => (
        <Col >
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/thoughtful-professional-basketball-player-in-activewear-holds-ball-concentrated-above-going-to-play-favorite-game_273609-46442.jpg?size=338&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
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
                src="https://img.freepik.com/free-photo/ethnic-athletic-guy-sitting-with-soccer-ball_23-2148203646.jpg?size=338&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
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
                src="https://img.freepik.com/free-photo/teenager-with-a-basketball-ball_23-2148800916.jpg?size=338&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
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