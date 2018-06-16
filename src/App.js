import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherstate: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => { // the event object will be passed to the method by React automatically as if it were normal Javascript, where you all get access to the event object.
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons; // holding a pointer 
    persons.splice(personIndex, 1);     // only changing the element it was pointing to
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
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            /* map (below) - converts an array into something else
               executed on every element of the array
            */
          }

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
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
