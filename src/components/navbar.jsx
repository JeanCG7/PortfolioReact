import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Menu extends Component {
  render() {
    return (
      <section id='navBar'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#about">Jean Carlos</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#about">
                Conhecimento
              </NavItem>
              <NavItem eventKey={2} href="#blog">
                Blog
              </NavItem>
              <NavItem eventKey={3} href="#projects">
                Projetos
              </NavItem>
              <NavItem eventKey={4} href="#biography">
                Biografia
              </NavItem>
              <NavItem eventKey={5} href="#form">
                Formulário
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}