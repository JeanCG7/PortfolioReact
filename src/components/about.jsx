import React, { Component } from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'


const URL = 'http://localhost:3003/api/about'

export default class About extends Component {
    constructor(props) {
        super(props);
        debugger;
    }

    render() {
        return (
            <section id='about' className='container'>
                <Row>
                    <Col lg={3} md={3} sm={3} xs={12}>
                        <Image src={require('../imgs/eu.jpg')} circle width={200} className='image'></Image>
                        <Button className='button' href={require('../files/jeanCurriculo.pdf')} target='_blank' download>Baixar Currículo</Button>
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={12}>
                        <p className='about'>
                            {this.props.about.aboutDesc}
                            {/* Meu nome é Jean Carlos Gonçalves, atualmente trabalho com desenvolvimento WEB
                            no Grupo Forlogic e curso o 6º período de Engenharia de Software. Sou natural de Tarumã- SP
                            e atualmente moro em Cornélio Procópio - PR <br>
                            Sempre gostei de enfrentrar desafios e descobrir coisas novas, aqui estão algumas tecnologias que aprendi saciando tal desejo!*/}
                        </p>
                    </Col>
                </Row>
                <h2>Conhecimento e Interesses</h2>
                <Row className='icons'>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/html.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/css.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/node.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/angular.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/react.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/fireBase.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/mysql.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/mongo.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/java.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/cSharp.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/dotNet.png')}></Image></Col>
                    <Col lg={1} md={2} sm={3} xs={4}><Image src={require('../imgs/sqlServer.png')}></Image></Col>
                </Row>
                <Row className='info'>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h3>
                            Interesses
                        </h3>
                        <ul>
                            {/* <li>Gestão de projetos</li>
                            <li>Liderança de times</li>
                            <li>Desenvolvimento Web</li> */}
                            {this.props.about.interest !== undefined && this.props.about.interest.map(interest => {
                                return (
                                    <li>{interest}</li>
                                );
                            })}

                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h3>
                            Idiomas
                        </h3>
                        <ul>
                            {/* <li>Português Nativo</li>
                            <li>Inglês Avançado</li> */}
                            {this.props.about.language !== undefined && this.props.about.language.map(language => {
                                return (
                                    <li>{language}</li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h3>
                            Formação
                        </h3>
                        <ul>
                            {/* <li>Engenharia de Software - UTFPR - Cornélio/PR</li>
                            <li>Técnico em Informática - ETEC - Assis/SP</li>
                            <li>Ensino Médio- ETEC - Assis/SP</li> */}
                            {this.props.about.education !== undefined && this.props.about.education.map(education => {
                                return (
                                    <li>{education}</li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h3>
                            Atividades Desenvolvidas & Experiência
                        </h3>
                        <ul>
                            {/* <li>1 ano e 6 meses - Estagiário - Universidade Aberta do Brasil - Tarumã/SP</li>
                            <li>9 meses - Analista de Suporte - VSM Ouro&Farma - Assis/SP</li>
                            <li>4 meses - Desenvolvimento WEB - Grupo Forlogic - Cornélio/PR (atual)</li>
                            <li>2016 - 2º lugar no Hackathon AETA - Tarumã/SP</li>
                            <li>2017 - 6º lugar no Hackathon INOVA - Presidente Prudente/SP</li> */}
                            {this.props.about.activities !== undefined && this.props.about.activities.map(activities => {
                                return (
                                    <li>{activities}</li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>

            </section>
        )
    }
}