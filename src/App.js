import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar'
import Menu from './components/about'
import About from './components/about'
import Blog from './components/blog'
import Project from './components/project'
import Biography from './components/biography'
import Form from './components/form'
import Footer from './components/footer'
import Routes from './routes'


import './css/footer.css'
import './css/style.css'
import './css/navbar.css'
import './css/about.css'
import './css/blog.css'
import './css/project.css'
import './css/biography.css'
import './css/form.css'

class App extends Component {
  render() {
    return (
      <div>
            <Navbar/>
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
