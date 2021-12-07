import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {
    const{selectedCourse,remove}=useAuth();
   
    
    return (
        <div>
            <Container>
        {selectedCourse.length ? (
          <Row>
            <Col md={8}>
              {selectedCourse.map((course) => {
                const { img, key, title, desc, rating, ratingCount, price } =
                  course;

                return (
                  <Row className="my-2" key={key}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col sm={7}>
                      <h5>{title}</h5>
                      <p className="mb-0">{desc}</p>
                      <h4>Price: {price}</h4>
                      <Row>
                        <Col sm={4}>
                          <Col>
                            <Rating
                              initialRating={rating}
                              readonly
                              emptySymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={emptyStar}
                                />
                              }
                              fullSymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={fullStar}
                                />
                              }
                            />
                            <span>{rating}</span>
                          </Col>
                          <Col>Total review {ratingCount}</Col>
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/courses/${key}`}
                              className="btn btn-primary w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(key)}
                              className="btn btn-primary  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            {/* <Col className="text-center" md={4}>
              <h4>Total {selectedCourse.length} course selected</h4>
              <h6>Total Price: {totalPrice.toFixed(2)} $</h6>

              <button
                onClick={() => {
                  alert("This for purchasing");
                  localStorage.setItem("cart", JSON.stringify([]));
                  setSelectedCourse([]);
                  history.push("/home");
                }}
                className="btn btn-primary"
              >
                Check Out
              </button>
            </Col> */}
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No Selected!</h1>
          </div>
        )}
      </Container>
        </div>
    );
};

export default Cart;