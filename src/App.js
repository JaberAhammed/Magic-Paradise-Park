
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFount from './pages/PageNotFount';
import AuthProvider from './contexte/AuthProvider';
import Footar from './components/Footar';

import Details from './pages/Details';
import PrivateRoute from './route/PrivateRoute';

function App() {
  return (
    <div >
      <AuthProvider>
     <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>

       <Route  path="/home">
         <Home></Home>
       </Route>

       <Route  path="/about">
         <About></About>
       </Route>

       <PrivateRoute  path="/cart">
        <Cart></Cart>
       </PrivateRoute>

       <Route  path="/contact">
        <Contact></Contact>
       </Route>

       <Route exact path="/courses">
        <Courses></Courses>
       </Route>
      
       <Route  path="/login">
        <Login></Login>
       </Route>

       <Route  path="/signup">
        <Signup></Signup>
       </Route>
       <Route  path="/courses/:key">
        <Details></Details>
       </Route>

       <Route  path="*">
        <PageNotFount></PageNotFount>
       </Route>
       
     </Switch>
     <Footar></Footar>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
