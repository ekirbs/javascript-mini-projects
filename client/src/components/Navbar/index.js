import React from "react";
import "./Navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => { // this is doubling up on links, I have both a manual system and bootstrap links in place.
  const expandBreakPoint = '1100px';

  return (
    <Navbar
      collapseOnSelect
      // expand={window.innerWidth >= expandBreakPoint ? "lg" : false} // check window width and set expand accordingly
      expand="lg"
      sticky="top"
      className="nav-card"
    >
      <div className="nav-container">
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange('Home')}
          // className={currentPage === 'Home' ? 'header-title active' : 'header-title'}
          className="header-title"
        >
          {/* <img 
            src={robotHead}
            alt="A robot's head."
          />{' '} */}
          <h2 className="title">
            <span className="title-first-line">JavaScript</span>
            <br></br>
            <span className="title-second-line">Mini Projects</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-list">
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="Fun Stuff"
              id="collasible-nav-dropdown"
              className="nav-list"
            >
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link
                  href="#project1"
                  onClick={() => handlePageChange('Project1')}
                  className={currentPage === 'Project1' ? 'nav-link active' : 'nav-link'}
                >
                  Project 1
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                more to come...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="nav-list">
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbar;