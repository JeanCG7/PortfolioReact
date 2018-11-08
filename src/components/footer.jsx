import React from 'react'
import { Row, Grid, Image } from 'react-bootstrap'

export default props => (
    <section id='footer'>
        <div>
            <Row>
                Jean Carlos Gonçalves
            </Row>
            <Row>
                jeancarlosgoncalves1230@gmail.com
            </Row>
            <Row>
                +55 (18) 99694-6472
            </Row>
            <Row>
                <a target='_blank' href='https://github.com/JeanCG7?tab=repositories'><Image src={require('../imgs/git.png')}></Image></a>
                <a target='_blank' href='https://www.facebook.com/JeanJCG'><Image src={require('../imgs/fb.png')}></Image></a>
                <a target='_blank' href='https://www.linkedin.com/in/jeanjcg/'><Image src={require('../imgs/ln.png')}></Image></a>
            </Row>
        </div>
    </section>
);