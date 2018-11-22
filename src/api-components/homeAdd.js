import React, { Component } from 'react'
import SideMenu from './sideNav'
import AboutAdd from './aboutAdd'
import BlogAdd from './blogAdd'
import ProjectAdd from './projectAdd'
import BiographyAdd from './biographyAdd'
import FooterAdd from './footerAdd'


class HomeAdd extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <SideMenu />
                {/* <AboutAdd /> */}
                {/* <BlogAdd /> */}
                {/* <ProjectAdd /> */}
                <BiographyAdd />
                {/* <FooterAdd/> */}
            </div>
        );
    }
}

export default HomeAdd;