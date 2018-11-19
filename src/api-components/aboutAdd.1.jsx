import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel, Col } from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import styled from 'styled-components'
import { withRR4, Nav, NavIcon } from 'react-sidenav';
import Axios from 'axios';

const URL = 'http://localhost:3003/api/about'


export default class AboutAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutDesc: '',
            skills: [{ title: '', item: '' }]
        };
        this.getAbout();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAbout = this.getAbout.bind(this);
    }

    addClick() {
        debugger;
        this.setState(prevState => ({
            skills: [...prevState.skills, { title: '', item: '' }]
        }))
    }

    createUI() {
        return this.state.skills.map((el, i) => (
            <Col lg={3} md={3} sm={12} xs={12}>
                <FormGroup key={i}>
                    <Label for="lblContent">Interesses</Label>
                    <Input placeholder='Área do conhecimento' name='title' value={el.title || ''} onChange={this.handleChange.bind(this, i)} />
                    <Label for="lblContent">Item</Label>
                    <Input placeholder='Item' name='item' value={el.item || ''} onChange={this.handleChange.bind(this, i)} />
                    <Button type='button' value='remove' onClick={this.removeClick.bind(this, i)}>Remover Item</Button>
                </FormGroup>
            </Col>
        ))
    }

    getAbout() {
        var self = this;
        Axios.get(URL)
            .then(resp => {
                self.setState(resp.data);
                debugger;
            })
    }

    handleChange(i, e) {
        debugger;
        const { name, value } = e.target;
        let skills = [...this.state.skills];
        skills[i] = { ...skills[i], [name]: value };
        this.setState({ skills })
    }

    handleChangeAbout(e) {
        this.setState({ ...this.state, aboutDesc: e.target.value })
    }

    removeClick(i) {
        debugger;
        let skills = [...this.state.skills];
        skills.splice(i, 1);
        this.setState({ skills });
    }

    handleSubmit(event) {
        const about = this.state;
        Axios.post(URL, about)
            .then();
        debugger;
        alert('A skills was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Texto - Sobre mim</Label>
                        <Input id='txtAbout' componentClass='textarea' placeholder='Digite um resumo sobre você' value={this.state.aboutDesc || ''} onChange={this.handleChangeAbout.bind(this)} />
                    </FormGroup>
                    {this.createUI()}
                    <FormGroup>
                        <Button type='button' onClick={this.addClick.bind(this)}>Adicionar item</Button>
                    </FormGroup>
                    <Button type='submit'>Salvar</Button>
                </Form>
            </div>
        )
    }
}