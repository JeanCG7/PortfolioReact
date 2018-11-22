import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel, Col } from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import styled from 'styled-components'
import { withRR4, Nav, NavIcon } from 'react-sidenav';
import Axios from 'axios';

const URL = 'http://localhost:3003/api/footer'


export default class FooterAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            icons: [{
                src: '',
                link: '',
            }]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getFooter = this.getFooter.bind(this);
        this.getFooter();
    }

    addClick(stateItem) {
        this.setState({
            icons: [...stateItem, { src: '', link: '' }]
        })
    }

    createUI(stateItem) {
        return stateItem.map((el, i) => (
            <FormGroup key={i}>
                <Label for="lblContent">Link</Label>
                <Input placeholder='Item' name='link' value={el.link || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                <Label for="lblContent">Imagem/Ícone</Label>
                <Input placeholder='Item' name='src' value={el.src || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                <Button type='button' value='remove' onClick={this.removeClick.bind(this, i, stateItem)}>Remover Item</Button>
            </FormGroup>
        ))
    }

    getFooter() {
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
        if (name == 'link')
            itens[i].link = value;
        else
            itens[i].src = value;
        this.setState({ icons: itens })
    }

    handleChangeSingle(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    removeClick(i, stateItem) {
        let itens = [...stateItem];
        itens.splice(i, 1);
        this.setState({ icons: itens })
    }

    handleSubmit(event) {
        var me = this;
        const footer = me.state;
        if (me.state._id == undefined)
            Axios.post(URL, footer)
                .then(function () {
                    me.getFooter();
                    alert("Rodapé salvo com sucessso")
                });
        else {
            Axios.put(URL + `/${me.state._id}`, footer)
                .then(function () {
                    me.getFooter();
                    alert("Rodapé atualizado com sucessso")
                });
        }
        event.preventDefault();
    }


    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <Col lg={9} md={9} sm={12} xs={12}>
                        <FormGroup>
                            <Label>Nome</Label>
                            <Input name='name' placeholder='Digite seu nome' value={this.state.name || ''} onChange={this.handleChangeSingle.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>E-mail</Label>
                            <Input name='email' type='email' placeholder='Digite seu e-mail' value={this.state.email || ''} onChange={this.handleChangeSingle.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Telefone</Label>
                            <Input name='phone' placeholder='Digite seu telefone de contato' value={this.state.phone || ''} onChange={this.handleChangeSingle.bind(this)} />
                        </FormGroup>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <Label for="lblContent">Redes sociais</Label>
                        {this.createUI(this.state.icons)}
                        <FormGroup>
                            <Button type='button' onClick={this.addClick.bind(this, this.state.icons)}>Adicionar item</Button>
                        </FormGroup>
                    </Col>
                    <Button type='submit'>Salvar</Button>
                </Form>
            </div>
        )
    }
}