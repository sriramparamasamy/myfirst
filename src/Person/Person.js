import React from 'react';
// import Radium from 'radium';

import './Person.css'

const Person = (props) => {
    // return <p> I'm a Person and I am {Math.floor(Math.random() *30)} years old! </p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width:'450px'
    //     }
    // }
    return (
    <div className ="Person" >

    <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default Person;