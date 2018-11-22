import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export default class Menu extends Component {
  render() {
    return (
      <section id='navBar'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to='#about'>Jean Carlos</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem >
                <Link to='#about'>Sobre</Link>
              </NavItem>
              <NavItem>
              <Link to='#blog'>Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="#project">Projetos</Link>
              </NavItem>
              <NavItem>
                <Link to="#biography">Biografia</Link>
              </NavItem>
              <NavItem>
                <Link to="#form">Formulário</Link>
              </NavItem>
              <NavItem>
                <Link to="#footer">Contato</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}