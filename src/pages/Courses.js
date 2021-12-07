import React from 'react';
import useAuth from '../hooks/useAuth';
import SectionBg from "./../assets/images/sectionBg.jpg";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { Container } from 'react-bootstrap';
import Course from '../components/Course';


const Courses = () => {
    const { courses } = useAuth()
    return (
        <div className="py-5" style={{
            background: `url(${SectionBg})`, backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
        }}>
            <div >
                <Bounce left cascade>
                    <h2 className="text-center text-white "> All Service</h2>
                </Bounce>
                <Zoom right cascade>
                    <p className="text-white text-center">
                        Here you can find our all latest Service. Choose some of them and
                        try to Best Service.
                    </p>
                </Zoom>
            </div>

            <Container >
                
                    <div className="d-flex my-3 flex-wrap justify-content-between">
                        {courses.map((course) => (
                            <Course key={course.key} course={course} />
                        ))}
                    </div>
               


            </Container>



        </div>
    );
};

export default Courses;