import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'


const Signup = () => {
  const { AllContexts } = useAuth();
    const {
        getEmail,
        getPassword,
        error,
        signUp } =AllContexts;
    return (  <div className="text-center my-4">
    <h2>Please Sign Up</h2>
   <p className=" mt-2">Sign Up with Email & Password</p>
    <p className="text-danger text-center">{error}</p>
   <div className="w-25 mx-auto">
     <Form onSubmit={signUp}>
       <Row>
         <Col className="text-start">
           <Form.Label htmlFor="email" visuallyHidden>
             Your Email Address
           </Form.Label>
           <InputGroup className="mb-2">
             <InputGroup.Text>
               <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
             </InputGroup.Text>
             <FormControl
               onClick={getEmail}
               type="email"
               autoComplete="current-email"
               id="email"
               placeholder="Enter your email address"
             />
           </InputGroup>
         </Col>
       </Row>
       <Row className="mt-2">
         <Col className="text-start">
           <Form.Label htmlFor="password" visuallyHidden>
             Your Password
           </Form.Label>
           <InputGroup className="mb-2">
             <InputGroup.Text>
               <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
             </InputGroup.Text>
             <FormControl
               onClick={getPassword}
               type="password"
               autoComplete="current-password"
               id="password"
               placeholder="Enter your password"
             />
           </InputGroup>
         </Col>
       </Row>

       <button type="submit" className="btn btn-primary mt-2 w-100">
         Sign Up
       </button>
     </Form>
   </div>
   <p className="mt-2">
     <NavLink className="text-decoration-none" to="/login">
       Need an Account? Please Login!
     </NavLink>
   </p>
   
 </div>
)
};

export default Signup;