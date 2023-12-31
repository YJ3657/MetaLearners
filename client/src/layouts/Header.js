import { React, useState } from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import LogInModal from '../modals/LogInModal';

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [logInModalOn, setLogInModalOn] = useState(false);
  return (
    <>
      <LogInModal
        show={logInModalOn}
        onHide={() => setLogInModalOn(false)}
      />
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>StudyHelper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>
                  <Button
                    variant="primary"
                    onClick={() => setLogInModalOn(true)}
                  >
                    Log In
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    variant="secondary"
                    onClick={() => setSignUpModalOn(true)}
                  >
                    Sign Up
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
