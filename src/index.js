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
            <Route path="/" component={App} />
            <Route path="/about" component={App} />
            <Route path="/crud" component={AboutAdd} />
            <Route path="/aboutAdd" component={AboutAdd} />
            <Route path="/blogAdd" component={BlogAdd} />
            <Route path="/projectAdd" component={ProjectAdd} />
            <Route path="/biographyAdd" component={BiographyAdd} />
            <Route path="/footerAdd" component={FooterAdd} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
