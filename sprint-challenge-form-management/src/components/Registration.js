import React, { Component } from 'react';
import FormikForm from './Form';
import axios from 'axios';


class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            response: ""
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/restricted/data')
        .then(res => {
            console.log('res.data', res.data)
            this.setState(this.state.response = [res.data])
                 })
        
    }
    
    render(){
        return(
            <div>
                <FormikForm formie ={this.state} />
                <p>IBIKI</p>
                <h3>{this.state.name}</h3>

            </div>
        )
    }
}

export default Registration;