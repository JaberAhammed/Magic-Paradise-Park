import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { AllContexts,selectedCourse } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, } = user;
    const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
    };
    const navStyle = {
        textDecoration: "none",
        margin: "010px",
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        textTransform: "Uppercase",
    };
    return (
        <div className="sticky-top">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="hoverStyle"
                        style={navStyle}
                        activeStyle={active} href="/home"> <img width="80px" src=
                            {logo} alt="Logo" />Magic Paradise Park</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="hoverStyle"
                                style={navStyle}
                                activeStyle={active} to="/home">Home</NavLink>

                            <NavLink className="hoverStyle"
                                style={navStyle}
                                activeStyle={active} to="/about">About</NavLink>

                            <NavLink className="hoverStyle"
                                style={navStyle}
                                activeStyle={active} to="/contact">Contact</NavLink>

                            <NavLink className="hoverStyle"
                                style={navStyle}
                                activeStyle={active} to="/courses">Service</NavLink>

                            <NavLink className="hoverStyle"
                                style={navStyle}
                                activeStyle={active} to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
                                <Badge bg="warning">{selectedCourse.length}</Badge>
                            </NavLink>

                            {
                                !displayName ? (<> <NavLink className="hoverStyle"
                                    style={navStyle}
                                    activeStyle={active} to="/login">Login</NavLink>

                                    <NavLink className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active} to="/signup">Sign Up</NavLink>
                                </>) : (
                                    <NavDropdown title={
                                        <img style={{ width: "45px", borderRadius: "50%" }} src={photoURL} alt="" />
                                    } >
                                        <div className="text-center">
                                            <p>{displayName}</p>
                                            {/* <h6>{email}</h6> */}
                                            <div className="text-center">
                                                <button onClick={logOut} className="btn btn-primary">
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>

                                    </NavDropdown>
                                )
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;