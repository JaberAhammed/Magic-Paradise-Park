import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import'./Footar.css'



const Footar = () => {

  return (
    <div>
      <Container fluid className="footer">
        <Row>
          <Col md={5}>
            <div className="text-center ">
              <img width="150px" src="https://photo-api.netlify.app/po/12.jpg" alt="" />
            </div>
          
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
              <h4> Explore</h4>
              <li>
                <a href="/home">home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="">OurServices</a>
              </li>
              <li>
                <a href="services"> Service</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h4>Subscribe</h4>
            <p>Stay in the know with news and promotions</p>

            <input type="text" className="form-control w-50 mx-auto" placeholder="text......" />
            <a href="/login"> <Button className="btn bg-primary my-4 px-5">Sign Up</Button></a>
          </Col>
          <p className="mt-3">Copyright &copy; All Reserved by
            in 2021</p>
          <hr style={{ width: "110px", margin: "auto" }} />
        </Row>
      </Container>
    </div>
  );
};

export default Footar