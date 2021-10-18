import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import SignupModal from "./SignupModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import authStore from "../Stores/AuthStore";
import { observer } from "mobx-react";
import React, { useState } from "react";
import SignInModal from "./SignInModal";

function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand className="title-nav" href="#home">
            Home
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/jam3ya-list">
              <Nav.Link href="#jam3yas">Jam3yas</Nav.Link>
            </Link>
            <Nav.Link href="#other">Other</Nav.Link>
            <NavDropdown title="other" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#members">Members</NavDropdown.Item>
              <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Social Media
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#sign">
              {authStore.user ? (
                <>
                  <li class="nav-item">Hello {authStore.user.username}</li>
                  <li class="nav-item">
                    <Button onClick={() => authStore.logout()}>Logout</Button>{" "}
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Button
                      onClick={() => {
                        setSignupIsOpen(true);
                        setSignInIsOpen(false);
                      }}
                    >
                      Sign up
                    </Button>
                    <SignupModal
                      signIn={signupIsOpen}
                      closeModal={() => setSignupIsOpen(false)}
                      isOpen={signupIsOpen}
                    />
                  </li>
                  <li>
                    <Button
                      onClick={() => {
                        setSignupIsOpen(false);
                        setSignInIsOpen(true);
                      }}
                    >
                      Sign in
                    </Button>
                    <SignInModal
                      signIn={signInIsOpen}
                      closeModal={() => setSignInIsOpen(false)}
                      isOpen={signInIsOpen}
                    />
                  </li>
                </>
              )}
              <SignInModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
