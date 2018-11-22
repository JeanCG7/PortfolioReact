import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <section id='navBar'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/aboutAdd">Jean Carlos - ADMIN Profile</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link to='/aboutAdd'>Sobre</Link>
              </NavItem>
              <NavItem>
                <Link to='/blogAdd'>Blog</Link>
              </NavItem>
              <NavItem>
                <Link to='/projectAdd'>Projeto</Link>
              </NavItem>
              <NavItem>
                <Link to='/biographyAdd'>Biografia</Link>
              </NavItem>
              <NavItem>
                <Link to='/footerAdd'>Rodapé</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    );
  }
}