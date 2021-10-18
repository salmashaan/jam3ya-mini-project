import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import SignupModal from "./SignupModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import authStore from "../Stores/AuthStore";
import { observer } from "mobx-react";
import React, { useState } from "react";
import SignInModal from "./SignInModal";
import logo from "../Components/communities.png";

function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);

  return (
    <Navbar
      className="navbar navbar-dark bg-dark navbar-default navbar-static-top"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Link to="/">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              width="50"
              height="50"
              class="d-inline-block align-top"
              alt=""
            />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/jam3ya-list">
              <Nav.Link href="#jam3yas">Jam3yas</Nav.Link>
            </Link>
            <Nav.Link href="#about-us"> About Us</Nav.Link>
            <NavDropdown title="Other" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#members">Members</NavDropdown.Item>
              <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#social-media">
                Social Media
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#other">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="nav-buttons" href="#sign">
              {authStore.user ? (
                <>
                  <li class="nav-item">Hello {authStore.user.username}</li>
                  <li class="nav-item">
                    <Button onClick={() => authStore.logout()}>Logout</Button>{" "}
                  </li>
                </>
              ) : (
                <div className="btn-toolbar gap-3">
                  <li class="nav-item ">
                    <Button
                      variant="outline-info "
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
                      variant="outline-info"
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
                </div>
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
