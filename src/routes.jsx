import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'
import About from './components/about'
import Blog from './components/blog';
import Project from './components/project';
import Biography from './components/biography';
import Form from './components/form';
import Footer from './components/footer';



export default props => (
    <Router history={hashHistory}>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/projects' component={Project}/>
        <Route path='/biography' component={Biography}/>
        <Route path='/form' component={Form}/>
        <Route path='/footer' component={Footer}/>
    </Router>
)
