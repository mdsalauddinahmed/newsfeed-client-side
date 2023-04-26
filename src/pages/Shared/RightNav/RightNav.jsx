import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaFacebook,FaTwitter,FaInstagram  } from "react-icons/fa";
import { Button, ListGroup } from "react-bootstrap";
import QZone from "../Qzone/Qzone";
import bg from "../../../assets/assets/bg.png"

const RightNav = () => {
  return (
    <div>
      <div>
        <h4> Login With </h4>
        <Button className="d-block my-2" variant="outline-primary">
          {" "}
          <BsGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          {" "}
          <BsGithub /> Login with Github
        </Button>
      </div>

      <div>
        <h4>Find on us</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
         </ListGroup>
      </div>
      <QZone></QZone>
      {/* <div className="bg-{bg}">
            <h1>hello</h1>
      </div> */}
    </div>
  );
};

export default RightNav;
