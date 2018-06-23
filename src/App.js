import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Max', age: 28 },
      { id: 'asdf', name: 'Manu', age: 29 },
      { id: 'kh45', name: 'Stephanie', age: 26 }
    ],
    otherstate: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => { // the event object will be passed to the method by React automatically as if it were normal Javascript, where you all get access to the event object.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // more old fashioned approach would be:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // one way to do it. slice() without arguments copies the full array and returns a new one
    const persons = [...this.state.persons]; // the spread (...) operator spreads out the elements in an array into a list of elements and saves it in the new array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    // this part is javascript code
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };// holding a pointer 

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* map (below) - converts an array into something else
               executed on every element of the array
            */ }

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    // the return statement contains JSX, not simple Javascript
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        {/* one way to solve the 'this' problem that JavaScript has. Not the most efficient one, though 
        since React can render the app too often*/}

        <button 
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
          {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
