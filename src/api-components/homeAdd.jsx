import React, { Component } from 'react'
import SideMenu from './sideNav'
import AboutAdd from './aboutAdd'
import BlogAdd from './blogAdd'
import ProjectAdd from './projectAdd'
import BiographyAdd from './biographyAdd'
import FooterAdd from './footerAdd'

import Routes from '../routes'
class HomeAdd extends Component {
    render() {
        return (
            <div>
                <SideMenu />
                {/*<AboutAdd />*/}
                {/* <BlogAdd /> */}
                {/* <ProjectAdd /> */}
                {/* <BiographyAdd /> */}
                <FooterAdd/>
            </div>
        );
    }
}

export default HomeAdd;