import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from '../components/navbar'
import About from '../components/about'
import Blog from '../components/blog'
import Project from '../components/project'
import Biography from '../components/biography'
import Form from '../components/form'
import Footer from '../components/footer'

import '../css/footer.css'
import '../css/style.css'
import '../css/navbar.css'
import '../css/about.css'
import '../css/blog.css'
import '../css/project.css'
import '../css/biography.css'
import '../css/form.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
            <Menu />
            <About />
            <Blog />
            <Project />
            <Biography />
            <Form />
            <Footer />
      </div>
    );
  }
}

export default App;
