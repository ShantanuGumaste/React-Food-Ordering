import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar expand="md" className={`bg-body-tertiary ${classes.header}`}>
        <Container>
          <Navbar.Brand href="#home">
            <strong className="h2 text-white">Food Delivery</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HeaderCartButton onClick={props.onShowCart} />
              <Link to={`/myOrders/64acf552f67a23f802efbddd`}>Profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
