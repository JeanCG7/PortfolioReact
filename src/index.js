import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import HomeAdd from './api-components/homeAdd.js';
import AboutAdd from './api-components/aboutAdd';
import BlogAdd from './api-components/blogAdd';
import ProjectAdd from './api-components/projectAdd';
import BiographyAdd from './api-components/biographyAdd';
import FooterAdd from './api-components/footerAdd';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/about" component={App} />
            <Route path="/crud" component={HomeAdd} />
            <Route path="/aboutAdd" render={()=><HomeAdd link='aboutAdd'/>} />
            <Route path="/blogAdd" render={()=><HomeAdd link='blogAdd'/>} />
            <Route path="/projectAdd" render={()=><HomeAdd link='projectAdd'/>} />
            <Route path="/biographyAdd" render={()=><HomeAdd link='biographyAdd'/>} />
            <Route path="/footerAdd" render={()=><HomeAdd link='footerAdd'/>} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
