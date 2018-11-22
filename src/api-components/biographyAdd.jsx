import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel, Col } from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import styled from 'styled-components'
import { withRR4, Nav, NavIcon } from 'react-sidenav';
import Axios from 'axios';
import SideMenu from './sideNav'

const URL = 'http://localhost:3003/api/biography'


export default class BioAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bioItem: [{
                title: '',
                text: '',
                alt: '',
                link: '',
                src: ''
            }]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getBio = this.getBio.bind(this);
        this.getBio();
    }

    addClick() {
        this.setState(prevState => ({
            bioItem: [...prevState.bioItem, { title: '', text: '', alt: '', link: '', src: '' }]
        }))
    }
    createUI(stateItem) {
        return stateItem.map((el, i) => (
            <Col lg={3} md={3} sm={12} xs={12}>
                <FormGroup key={i}>
                    <Label for="lblContent">Título</Label>
                    <Input placeholder='Título' name='title' value={el.title || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Texto</Label>
                    <Input placeholder='Texto' name='text' value={el.text || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Descrição da Imagem</Label>
                    <Input placeholder='Descrição' name='alt' value={el.alt || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Link referência</Label>
                    <Input placeholder='Link do post' name='link' value={el.link || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Link da imagem</Label>
                    <Input placeholder='Link da Imagem' name='src' value={el.src || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Button type='button' value='remove' onClick={this.removeClick.bind(this, i, stateItem)}>Remover Item</Button>
                </FormGroup>
            </Col>
        ))
    }

    getBio() {
        var self = this;
        Axios.get(URL)
            .then(resp => {
                if (resp.data.length > 0)
                    self.setState(resp.data[resp.data.length - 1]);
            })
    }

    handleChange(i, bioItem, e) {
        const { name, value } = e.target;
        let itens = [...bioItem];
        itens[i] = { ...itens[i], [name]: value };
        this.setState({ bioItem: itens });
    }

    removeClick(i, stateItem, e) {
        let bioItem = [...stateItem];
        bioItem.splice(i, 1);
        this.setState({ bioItem })
    }

    handleSubmit(event) {
        var me = this;
        const bio = me.state;
        if (me.state._id == undefined)
            Axios.post(URL, bio)
                .then(function () {
                    me.getBio();
                    alert("Bio salvo com sucessso")
                });
        else {
            Axios.put(URL + `/${me.state._id}`, bio)
                .then(function () {
                    me.getBio();
                    alert("Bio atualizada com sucessso")
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
                        {this.createUI(this.state.bioItem)}

                        <FormGroup>
                            <Button type='button' onClick={this.addClick.bind(this)}>Adicionar item</Button>
                        </FormGroup>
                        <Button type='submit'>Salvar</Button>
                    </Form>
                </div>
            </div>
        )
    }
}