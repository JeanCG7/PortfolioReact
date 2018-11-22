import React, { Component } from 'react';
import Card from '../template/card'
import { Row, Col } from 'react-bootstrap'

export default class Project extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <section className='container' id='project'>
                <h2>Projetos</h2>

                <Row>
                    {/* <Col lg={6} md={6} sm={12} xs={12}>
                        <Card
                            className='card project'
                            src={require('../imgs/todo.jpg')}
                            link='https://github.com/JeanCG7/React-TodoApp'
                            alt='To-do List'
                            title='To-do List'
                            subTitle='Aplicativo Web de execução da tarefas feito em React'>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Card
                            className='card project'
                            src={require('../imgs/reactProject.jpg')}
                            link='https://github.com/JeanCG7/T02-Web-React'
                            alt='React'
                            title='Projeto portfólio em React'
                            subTitle='Portfólio feito com React.js feito para trabalho final da universidade'>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Card
                            className='card project'
                            src={require('../imgs/utfpr.png')}
                            link='https://github.com/JeanCG7/dctb-utfpr-2018-2'
                            alt='UTFPR'
                            title='Trabalhos desenvolvidos na UTFPR'
                            subTitle='Repositório do Git contendo meus trabalhos e de demais colegas de classe na disciplina de Programação Web'>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Card
                            className='card project'
                            src={require('../imgs/progress.png')}
                            alt='Em construção'
                            title='Trabalhos futuros'
                            subTitle='Espaço reservado para futuras aplicações que estão sendo desenvolvidas'>
                        </Card>
                    </Col> */}
                     {this.props.project.projectItem !== undefined && this.props.project.projectItem.map(project => {
                        return (
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <Card
                                    className='card blog'
                                    imgWidth='100%'
                                    imgHeight='100%'
                                    title={project.title}
                                    subTitle={project.subtitle}
                                    alt={project.alt}
                                    link={project.link}
                                    src={require(`../imgs/${project.src}`)}>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </section>
        )
    }
}
