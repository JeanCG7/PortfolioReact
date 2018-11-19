import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router';
export default class Menu extends Component {
  render() {
    return (
      <section id='navBar'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#about">Jean Carlos - ADMIN Profile</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>
                <Link to='/aboutAdd'>Sobre</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to='/blogAdd'>Blog</Link>
              </NavItem>
              <NavItem eventKey={3} href="#projects">
                Projetos
              </NavItem>
              <NavItem eventKey={4} href="#biography">
                Biografia
              </NavItem>
              <NavItem eventKey={5} href="#footer">
                Rodapé
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}