import React, { Component } from 'react'
import { Row, Grid, Image } from 'react-bootstrap'

export default class Footer extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section id='footer'>
                <div>
                    <Row>
                        {this.props.footer.name}
            </Row>
                    <Row>
                        {this.props.footer.email}
            </Row>
                    <Row>
                        {this.props.footer.phone}
            </Row>
                    <Row>
                        {/* <a target='_blank' href='https://github.com/JeanCG7?tab=repositories'><Image src={require('../imgs/git.png')}></Image></a>
                        <a target='_blank' href='https://www.facebook.com/JeanJCG'><Image src={require('../imgs/fb.png')}></Image></a>
                        <a target='_blank' href='https://www.linkedin.com/in/jeanjcg/'><Image src={require('../imgs/ln.png')}></Image></a> */}
                        {this.props.footer.icons !== undefined && this.props.footer.icons.map(icon => {
                                return (
                                    <a target='_blank' href={icon.link}><Image src={require(`../imgs/${icon.src}`)}></Image></a>
                                );
                            })}
                    </Row>
                </div>
            </section>
        )
    }
}