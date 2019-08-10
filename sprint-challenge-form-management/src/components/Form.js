import React, {useState, useEffect, Component } from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';


const Formie = ( {errors, touched, values, handleSubmit, status} ) => {
    const [state, setState] = useState([])

    useEffect(()=>{
        if(status){setState([...state, status])}
    }, [status]);

    return(
        <>
        <div>
        <Form className = "form">
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <Field type = "text" name = "username" placeholder = "Username" />
            {touched.password && errors.password && <p className="error">{errors.password}</p>}
            <Field type = "password" name = "password" placeholder = "Password" />
            <button type = "submit">Submit!</button>   
        </Form>
        <div className="userState">
          {state.map(user=> {
              return <p key={user.name} > {user.password}</p>
          })}
          </div>
            </div>
        </>
    );

}

const FormikForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string()
        .required(
            "Username Is Required"
        ),
        password: yup.string()
        .min(6, "Passwords gotta be longer than 6 chars")
        .required("Password Is Required")
         }),


        
         handleSubmit(values, {setStatus}){
        console.log(values);
        axios
        .post(URL, values)
        .then( res => {
            console.log("RES: ", res);
              setStatus(res.data);
        })
        .catch(err => console.log('err', err));
    }
})(Formie);


export default FormikForm;