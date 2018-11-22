import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel, Col } from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import styled from 'styled-components'
import { withRR4, Nav, NavIcon } from 'react-sidenav';
import Axios from 'axios';
import SideMenu from './sideNav'

const URL = 'http://localhost:3003/api/about'


export default class AboutAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutDesc: '',
            interest: [],
            language: [],
            education: [],
            activities: [],
            icons: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAbout = this.getAbout.bind(this);
        this.getAbout();
    }

    addClick(stateItem, item) {
        this.setState({
            //[item]: [...stateItem, { title: '', item: '' }]
            [item]: [...stateItem, '']
        })
    }

    createUI(stateItem, inputName) {
        return stateItem.map((el, i) => (
            <FormGroup key={i}>
                <Label for="lblContent">Item</Label>
                <Input placeholder='Item' name={inputName} value={el || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                <Button type='button' name={inputName} value='remove' onClick={this.removeClick.bind(this, i, stateItem)}>Remover Item</Button>
            </FormGroup>
        ))
    }

    getAbout() {
        var self = this;
        Axios.get(URL)
            .then(resp => {
                if (resp.data.length > 0)
                    self.setState(resp.data[resp.data.length - 1]);
            })
    }

    handleChange(i, stateItem, e) {

        const { name, value } = e.target;
        let itens = [...stateItem];
        itens[i] = value;
        this.setState({ [e.target.name]: itens })
    }

    handleChangeAbout(e) {
        this.setState({ ...this.state, aboutDesc: e.target.value })
    }

    removeClick(i, stateItem, e) {
        let itens = [...stateItem];
        itens.splice(i, 1);
        //this.setState({ skills: itens });
        this.setState({ [e.target.name]: itens })
    }

    handleSubmit(event) {
        var me = this;
        const about = me.state;
        if (me.state._id == undefined)
            Axios.post(URL, about)
                .then(function () {
                    me.getAbout();
                    alert("Sobre salvo com sucessso")
                });
        else {
            Axios.put(URL + `/${me.state._id}`, about)
                .then(function () {
                    me.getAbout();
                    alert("Sobre atualizado com sucessso")
                });
        }
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <SideMenu />
                <div className='container'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Texto - Sobre mim</Label>
                            <Input id='txtAbout' componentClass='textarea' placeholder='Digite um resumo sobre você' value={this.state.aboutDesc || ''} onChange={this.handleChangeAbout.bind(this)} />
                        </FormGroup>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <Label for="lblContent">Interesse</Label>
                            {this.createUI(this.state.interest, 'interest')}
                            <FormGroup>
                                <Button type='button' onClick={this.addClick.bind(this, this.state.interest, 'interest')}>Adicionar item</Button>
                            </FormGroup>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <Label for="lblContent">Línguas</Label>
                            {this.createUI(this.state.language, 'language')}
                            <FormGroup>
                                <Button type='button' onClick={this.addClick.bind(this, this.state.language, 'language')}>Adicionar item</Button>
                            </FormGroup>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <Label for="lblContent">Formação</Label>
                            {this.createUI(this.state.education, 'education')}
                            <FormGroup>
                                <Button type='button' onClick={this.addClick.bind(this, this.state.education, 'education')}>Adicionar item</Button>
                            </FormGroup>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <Label for="lblContent">Atividades Desenvolvidas</Label>
                            {this.createUI(this.state.activities, 'activities')}
                            <FormGroup>
                                <Button type='button' onClick={this.addClick.bind(this, this.state.activities, 'activities')}>Adicionar item</Button>
                            </FormGroup>
                        </Col>
                        <Button type='submit'>Salvar</Button>
                    </Form>
                </div>
            </div>
        )
    }
}