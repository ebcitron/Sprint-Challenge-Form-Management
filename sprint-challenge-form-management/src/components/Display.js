import React, {useState, useEffect, Component } from 'react';
import Axios from 'axios';
import Meal from './Meal';

function Display(){
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/restricted/data')
        .then(res => {
            console.log("RES", res)
            setMeals(res.data);
        })
    }, [])

    return(
        <div>
            <span>Hello Test!</span>
    {meals.map((meal, key) => {
        
            return <Meal meal={meal} index = {key} />
    })}
        </div>
    );
}

export default Display;