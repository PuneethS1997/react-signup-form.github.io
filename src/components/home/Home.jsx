import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEnvelope, FaRegStar, FaSearch } from "react-icons/fa";

export default class navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Hi,</Nav.Link>
              <NavDropdown title="Partner" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <FaCloudUploadAlt />
                  Upload
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {" "}
                  <FaEnvelope />
                  Message
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <FaRegStar />
                  Bookmarks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {" "}
                  <FaSearch />
                  Search
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
