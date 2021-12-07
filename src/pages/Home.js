import React from 'react';
import { Container,} from 'react-bootstrap';
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { NavLink } from 'react-router-dom';
import Bg from "./../assets/images/home.jpg";
import useAuth from "../hooks/useAuth"

import Course from '../components/Course';
import Recipe from '../recipe/Recipe';


const Home = () => {
    const { courses } = useAuth()
    // const history = useHistory();
    // function GoServices() {
    //     history.push("/courses");
    //   }
    return (
        <div>
            <div
                style={{
                    background: `url(${Bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
                <Container>
                    <div
                        style={{ height: "90vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <Bounce left cascade>
                                <h1 className="text-warning" >Magic Paradise Park</h1>
                            </Bounce>

                            <Bounce right cascade>
                                <p className="my-4 text-white    fs-5">
                                Thanks for your interest in Magic Paradise Park

                                </p>
                            </Bounce>

                            <Bounce>
                                <NavLink
                                    to='/courses'
                                    className="rounded-pill btn btn-primary fs-5 py-2 px-4"

                                >
                                    All Service
                                </NavLink>
                            </Bounce>
                        </div>
                    </div>
                </Container>
            </div>
            <div >
                <div className="text-center text-white">
                    <Bounce left cascade>
                    <h1>All Service</h1>
                    </Bounce>
                    <Zoom right cascade>
                        <p className="text-dark  text-center">
                            Here you can find our all latest Service. Choose some of them and
                            try to Best Service.
                        </p>
                    </Zoom>
                </div>

                <Container className="md-5" >

                    <div className="d-flex my-3 flex-wrap justify-content-between">
                        {courses.slice(0, 6)?.map((course) => (
                            <Course key={course.key} course={course} />
                        ))}
                    </div>



                </Container>

            </div>
            <Recipe></Recipe>
            <div>
               
            </div>
        </div>
    );
};

export default Home;