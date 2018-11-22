import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar'
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
import routes from './routes';
import Axios from 'axios';


const url = 'http://localhost:3003/api/'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      about: {},
      blog: {},
      project: {},
      biography: {},
      footer: {}
    }

    this.loadAbout = this.loadAbout.bind(this);
    this.loadBlog = this.loadBlog.bind(this);
    this.loadProject = this.loadProject.bind(this);
    this.loadBio = this.loadBio.bind(this);
    this.loadFooter = this.loadFooter.bind(this);

  }
  componentWillMount(){
    this.loadAbout();
    this.loadBlog();
    this.loadProject();
    this.loadBio();
    this.loadFooter();
  }

  loadAbout(){
    var me = this;
    Axios.get(url+'about')
      .then(res =>{
        const about = res.data[0];
        me.setState({about});
      })
  }

  loadBlog(){
    var me = this;
    Axios.get(url+'blog')
      .then(res =>{
        const blog = res.data[0];
        me.setState({blog});
      })
  }

  loadProject(){
    var me = this;
    Axios.get(url+'project')
      .then(res =>{
        const project = res.data[0];
        me.setState({project});
      })
  }

  loadBio(){
    var me = this;
    Axios.get(url+'biography')
      .then(res =>{
        const biography = res.data[0];
        me.setState({biography});
      })
  }

  loadFooter(){
    var me = this;
    Axios.get(url+'footer')
      .then(res =>{
        const footer = res.data[0];
        me.setState({footer});
      })
  }

  render() {
    return (
      <div>
            <Navbar/>
            <About about={this.state.about}/>
            <Blog blog={this.state.blog}/>
            <Project project={this.state.project}/>
            <Biography biography={this.state.biography}/>
            <Form />
            <Footer footer={this.state.footer}/>
      </div>
    );
  }
}

export default App;
