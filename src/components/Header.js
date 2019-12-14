import React from "react";
import { Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
export default function Header() {
  return (
    <Row className="mb-3">
      <Col xs="12">
        <header className="header">
          <div className="logo">
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
            <h1>Rick &amp; Morty Fan Page</h1>
          </div>

          <Nav tabs className="mt-3 mb-3">
            <NavItem>
              <NavLink exact to="/" className="nav-link">
                Home Page
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to={{ pathname: "/characters" }}
                className="nav-link"
              >
                Characters
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/episodes" className="nav-link">
                Episodes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/locations" className="nav-link">
                Locations
              </NavLink>
            </NavItem>
          </Nav>
        </header>
      </Col>
    </Row>
  );
}
