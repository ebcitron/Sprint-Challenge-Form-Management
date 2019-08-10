import React, { useState, Component } from 'react';
import FormikForm from './Form';
import axios from 'axios';


function Registration (){
    const [state, setState] = useState({username: "",
            password: ""})
            
        return(
                <div>
                    <FormikForm formie ={state} />
            
            </div>
        )
    }


export default Registration;