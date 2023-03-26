import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";



export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                <Nav.Link eventKey="first">History</Nav.Link>
                                <Nav.Link eventKey="second">Mission</Nav.Link>
                                <Nav.Link eventKey="third">Our Team</Nav.Link>
                                <Nav.Link eventKey="four">Contacts</Nav.Link>
                               </Nav.Item> 
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <img src="https://avatars.dzeninfra.ru/get-zen_doc/936895/pub_5c7557ffdb06b400b30e309a_5c75585a19e41a00b37a7d93/scale_1200" 
                                alt="History"
                                className="d-block w-100"
                                height={400}
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <img src="https://cast.gov.tt/wp-content/uploads/2021/09/banner-about-mission.jpg" alt="Mission"
                                className="d-block w-100"
                                height={400}
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <img src="https://idreamtootrust.org/wp-content/uploads/2020/05/Team-Photo-scaled-1.jpg" 
                                alt="People"
                                className="d-block w-100"
                                height={400}
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                <img src="http://www.tsu.edu/qep/images/Globe-contact.jpg" 
                                alt="Contacts"
                                className="d-block w-100"
                                height={400}   

                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}