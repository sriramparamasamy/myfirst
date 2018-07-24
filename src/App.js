import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import Person1 from './Person1/Person1';

class App extends Component {
  state = {
    persons: [
      {id: 'asdfg', name: 'sri',age:28},
      {id: 'poiu', name: 'ram',age:28},
      {id: 'dagde', name: 'stephanie',age:28},
    ],
    otherState: 'some other value',
    showPersons : false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    // Dont do this:this.state.persons[0].name='sriram'
    this.setState({
      persons: [
        {name: newName,age:28},
        {name: 'ram',age:28},
        {name: 'stephanie',age:27},
      ] })
    }

    deletePersonsHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
    }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ 
      persons: persons});
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if (this.state.showPersons){
      persons=(
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person
              click = {() => this.deletePersonsHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
            })
          }
        </div>
      );
      style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if (this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App">
      <h1>Hi, this is my project</h1>
      <p className={classes.join(' ')}> I m a React Developer </p>
      <Person1/>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {/* <Person name = "Max" age = "21"/> */}
      {/* <Person name = "Manu" age = "22">My Hobbies: Racing</Person> */} 
      {persons}
        </div>
        /* </StyleRoot> */
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now'));
  }
}

export default App;
