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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS this.state.persons[0].name = 'Maximilian';

    // setState is from the React library. Specifically, from the Component object. 
    // setState allows us to update the special state property and makes sure that React 
    // knows about this update and updates the DOM. It takes an object as an argument 
    // and merges the input with the existing state.
    // NOTE: if we update the property 'persons' (as here) and not the 'otherstate' 
    // property, only the changes in 'persons' will post.

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
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
          <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

            {/* The method below, on the other hand, is the preferred one. This controlls what 'this' inside 
            the function will refer to and binding it to 'this' outside the function, we're binding it to the class
            the second argument is the list of arguments that will be passed to the function. In this case, the new name.

            You have to be careful about the meaning of 'this' in JSX callbacks. In JavaScript, class methods are not bound 
            by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the 
            function is actually called.

            This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer 
            to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
            */}

          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
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
