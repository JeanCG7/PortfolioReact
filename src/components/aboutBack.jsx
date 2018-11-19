import React, { Component } from 'react'
import axios from 'axios'

import About from './about'
import { cpus } from 'os';

const URL = 'http://localhost:3003/api/portfolio'

export default class AboutBack extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getAbout();
        this.getAbout = this.getAbout.bind(this);    
    }

    getAbout() {
        debugger;
        var self = this;
        Axios.get(URL)
            .then(resp => {
                self.setState(resp.data);
        })
    }
    createUI() {
        return this.state.skills.map((el, i) => (
            <FormGroup key={i}>
                <Label for="lblContent">Área do Conhecimento</Label>
                <Input placeholder='Área do conhecimento' name='title' value={el.title ||''} onChange={this.handleChange.bind(this, i)} />
                <Label for="lblContent">Item</Label>
                <Input placeholder='Item' name='item' value={el.item ||''} onChange={this.handleChange.bind(this, i)} />
                <Button type='button' value='remove' onClick={this.removeClick.bind(this, i)}>Remover Item</Button>
            </FormGroup>
        ))
    }
}