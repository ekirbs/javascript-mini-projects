import React from "react";
import "./style.css";

const NavComponent = ({ currentPage, handlePageChange }) => { // this is doubling up on links, I have both a manual system and bootstrap links in place.
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
          <img 
            src={robotHead}
            alt="A robot's head."
          />{' '}
          <h2 className="title">
            <span className="title-first-line">Eric Kirberger </span>
            <br></br>
            <span className="title-second-line">Web Developer</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-list">
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Nav.Link>
            <NavDropdown
              title="Fun Stuff"
              id="collasible-nav-dropdown"
              className="nav-list"
            >
              <NavDropdown.Item>
                <Nav.Link
                  href="#lofi"
                  onClick={() => handlePageChange('LoFi')}
                  className={currentPage === 'LoFi' ? 'nav-link active' : 'nav-link'}
                >
                  Music Player
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link
                  href="#weather"
                  onClick={() => handlePageChange('Weather')}
                  className={currentPage === 'Weather' ? 'nav-link active' : 'nav-link'}
                >
                  Weather Forecast
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link
                  href="#map"
                  onClick={() => handlePageChange('Map')}
                  className={currentPage === 'Map' ? 'nav-link active' : 'nav-link'}
                >
                  Google Maps
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

export default NavComponent;