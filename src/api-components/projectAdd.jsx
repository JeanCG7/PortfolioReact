import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel, Col } from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
import styled from 'styled-components'
import { withRR4, Nav, NavIcon } from 'react-sidenav';
import Axios from 'axios';

const URL = 'http://localhost:3003/api/project'


export default class ProjectAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectItem: [{
                title: '',
                subtitle: '',
                alt: '',
                link: '',
                src: ''
            }]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getProject = this.getProject.bind(this);
        this.getProject();
    }

    addClick() {
        this.setState(prevState => ({
            projectItem: [...prevState.projectItem, { title: '', subtitle: '', alt: '', link: '', src: '' }]
        }))
    }
    createUI(stateItem) {
        return stateItem.map((el, i) => (
            <Col lg={3} md={3} sm={12} xs={12}>
                <FormGroup key={i}>
                    <Label for="lblContent">Título</Label>
                    <Input placeholder='Título' name='title' value={el.title || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Subtítulo</Label>
                    <Input placeholder='Subtitle' name='subtitle' value={el.subtitle || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Descrição da Imagem</Label>
                    <Input placeholder='Descrição' name='alt' value={el.alt || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Link do Projeto</Label>
                    <Input placeholder='Link do post' name='link' value={el.link || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Label for="lblContent">Link da Imagem</Label>
                    <Input placeholder='Link da Imagem' name='src' value={el.src || ''} onChange={this.handleChange.bind(this, i, stateItem)} />
                    <Button type='button' value='remove' onClick={this.removeClick.bind(this, i, stateItem)}>Remover Item</Button>
                </FormGroup>
            </Col>
        ))
    }

    getProject() {
        var self = this;
        Axios.get(URL)
            .then(resp => {
                if (resp.data.length > 0)
                    self.setState(resp.data[resp.data.length - 1]);
            })
    }

    handleChange(i, projectItem, e) {
        const { name, value } = e.target;
        let itens = [...projectItem];
        itens[i] = { ...itens[i], [name]: value };
        this.setState({ projectItem: itens });
    }

    removeClick(i, stateItem, e) {
        let projectItem = [...stateItem];
        projectItem.splice(i, 1);
        this.setState({projectItem})
    }
    handleSubmit(event) {
        var me = this;
        const project = me.state;
        if (me.state._id == undefined)
            Axios.post(URL, project)
                .then(function(){
                    me.getProject();
                    alert("Projetos salvos com sucessso")
                });
        else {
            Axios.put(URL + `/${me.state._id}`, project)
                .then(function(){
                    me.getProject();
                    alert("Projetos atualizados com sucessso")
                });
        }
        event.preventDefault();
    }


    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    {this.createUI(this.state.projectItem)}

                    <FormGroup>
                        <Button type='button' onClick={this.addClick.bind(this)}>Adicionar item</Button>
                    </FormGroup>
                    <Button type='submit'>Salvar</Button>
                </Form>
            </div>
        )
    }
}