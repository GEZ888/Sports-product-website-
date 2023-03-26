import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default class Top extends Component {
    render() {
        return (
            <>
            <Container>
        <h2 className="text-center m-4">Most popular</h2>
        <div className="my-4">
        <Row xs={2} md={3} className="g-3">
  {Array.from({ length: 3 }).map((_, idx) => (
        <Col >
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/fitness-woman-in-stylish-pink-sports-bra-and-leggings-posing_273443-266.jpg?size=626&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=sph"
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
                src="https://img.freepik.com/free-photo/beautiful-young-female-athlete-practicing-on-red-studio-wall_155003-37326.jpg?size=626&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=sph"
                alt="sneakers"
                />
                <Card.Body>
                    <Card.Title>MMM</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                    <Button variant="danger">More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img 
                variant="top"
                src="https://img.freepik.com/free-photo/young-beautiful-pretty-girl-doing-physical-exercises-with-fitball_186202-1409.jpg?size=626&ext=jpg&ga=GA1.2.1376812356.1678719358&semt=ais"
                alt="sneakers"
                />
                <Card.Body>
                    <Card.Title>LLL</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and</Card.Text>
                    <Button variant="danger">More</Button>
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