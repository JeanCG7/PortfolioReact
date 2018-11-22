import React, { Component } from 'react'
import SideMenu from './sideNav'
import AboutAdd from './aboutAdd'
import BlogAdd from './blogAdd'
import ProjectAdd from './projectAdd'
import BiographyAdd from './biographyAdd'
import FooterAdd from './footerAdd'
import fire from '../config/Fire';
import Login from '../Login'
import { Button, Row } from 'react-bootstrap'

class HomeAdd extends Component {
    constructor(props) {
        super(props)
        this.renderComponents = this.renderComponents.bind(this);
        this.state = ({
            user: null
        })
        this.authListener = this.authListener.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    logout() {
        fire.auth().signOut();
    }

    authListener() {
        debugger;
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    renderComponents() {
        var link = this.props.link;
        switch (link) {
            case 'aboutAdd':
                return <AboutAdd />
            case 'blogAdd':
                return <BlogAdd />
            case 'projectAdd':
                return <ProjectAdd />
            case 'biographyAdd':
                return <BiographyAdd />
            case 'footerAdd':
                return <FooterAdd />
        }
    }
    render() {
        return (
            <div className='container HomeCrud'>
                {this.state.user ?
                    <div>
                        <SideMenu />
                        {this.renderComponents()}
                        <Row>
                            <Button bsStyle='danger' onClick={this.logout}>Logout</Button>
                        </Row>
                    </div>
                    : <Login />}
            </div>
        );
    }
}

export default HomeAdd;