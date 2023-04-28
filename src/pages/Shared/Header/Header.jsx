 
import { useContext } from "react";
import logo from "../../../assets/assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
 

 
const Header = () => {

   
   
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
      </div>
      <div className="d-flex gap-3 bg-secondary py-2 px-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-light" speed={100} pauseOnHover={true}>
          I can be a React component, multiple React components, or just
          some..Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... text.
        </Marquee>
      </div>

       
    </Container>
  );
};

export default Header;
