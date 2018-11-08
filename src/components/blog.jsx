import React from 'react';
import Card from '../template/card'
import { Row, Col } from 'react-bootstrap'

export default props => (
    <section id='blog' className='container'>
    <h2>Artigos Interessantes</h2>
        <Row className='row'>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card
                    className='card blog'
                    src={require('../imgs/blog1.png')}
                    link='https://medium.com/@TechMagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d'
                    imgWidth='100%'
                    imgHeight='100%'
                    alt='React vs Angular vs Vue'
                    title='React vs Angular vs Vue'
                    subTitle='Qual a melhor escolha para o frontend?'
                    text='Artigo que diferencia as principais bibliotecas e frameworks front-end da atualidade'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card
                    className='card blog'
                    src={require('../imgs/reactBig.png')}
                    link='https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2'
                    imgWidth='100%'
                    imgHeight='170px'
                    alt='React.js'
                    title='React.js'
                    subTitle='Os fundamentos básicos de React.js'
                    text='Entenda um pouco masi todo o hype por trás dessa nova biblioteca javascript e seu poder!'>
                </Card>
            </Col>
        </Row>
        <Row className='row'>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card
                    className='card blog'
                    src={require('../imgs/cool.jpg')}
                    link='https://medium.freecodecamp.org/computer-science-vs-software-engineering-which-one-is-a-better-major-88482c38446b'
                    alt='Engenharia de Software x Ciência da Computação'
                    title='Engenharia de Software x Ciência da Computação'
                    subTitle='Entenda um pouco mais da diferenciação de ambos cursos'
                    text='Artigo escrito em inglês que abordar as principais diferenças dos dois cursos e as atividades exercidas pelos profissionais'>
                </Card>
            </Col>
        </Row>
    </section>
);