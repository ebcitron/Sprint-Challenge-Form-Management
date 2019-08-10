import React, { Component } from 'react';
import FormikForm from './Form';


class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "" ,
            response: ""
        }
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