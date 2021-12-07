import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import sectionBg from "./../assets/images/sectionBg.jpg";
import Wobble from "react-reveal/Wobble";
import Zoom from "react-reveal/Zoom";

const About = () => {
    return (
        <div
            style={{
                background: `url(${sectionBg})`, backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}
            className="py-5"
        >
            <Container>
                <Zoom>
                    <h2 className="text-center text-white mb-4">
                        WELCOME TO MAGIC PARADISE PARK
                    </h2>
                </Zoom>
                <Row>
                    <Col md className="pe-3">
                        <Wobble bottom>
                            <h5 className="text-danger">About Us</h5>
                            <p className="text-white">
                                let's begin the day at Magic Paradise Park, a nature-friendly amusement park in Cumilla which is the only composite park in Bangladesh.
                                You can cherish your day with a "WOW" experience as we are offering the biggest entertainment in our amusement park.
                            </p>
                            <p className="text-white">
                                We have the biggest wave pool, splash pool, lazy river, slides & sleepers, etc. where you can't imagine how the time goes with loads of excitements, music, live DJ
                                *** We have the biggest dinosaur world where you will see the lost world dinosaurs roaring in front of you, shaking their body parts. Also, you can ride upon them as well !! It's really possible now only @ Magic Paradise.
                            </p>
                        </Wobble>
                    </Col>
                    <Col md className="pe-3">
                        <Wobble bottom>
                            <h5 className="text-danger">Our Vision</h5>
                            <p className="text-white">
                                We have huge parking facilities so you don't need to worry about it.
                                We will be happy to delight you in our park with our service.
                            </p>
                            <h5 className="text-danger">Our Mission</h5>
                            <p className="text-white">
                                We have multiple joy rides where you can enjoy the thrilling rides. We have the highest Ferris wheel (110 feet), bumper car, longest train traveling around the Malta fruit garden, roller coasters & many other adventure rides!
                                So why are you waiting for...make a plan among your family, friends, office colleagues & enjoy your holidays fully
                            </p>
                        </Wobble>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md>
                        <Wobble bottom>
                            <h5 className="text-danger"> Contact</h5>
                            <p className="text-white">

                                Magic Paradise Management
                                Salmanpur,<br /> Kotbari, Cumilla
                                Contact - +88-01755660601 or 01321 124562
                            </p>
                        </Wobble>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;
