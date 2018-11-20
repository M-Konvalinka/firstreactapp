import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
       // Below would be the data set, usually from DB in real app
      {name: 'Mike', age: 24},
      {name: 'Frank', age: 37},
      {name: 'Random', age: 69}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = () => {

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Mike', age: 24},
        {name: event.target.value, age: 37},
        {name: 'Random', age: 8000}
    ]
  })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            click={this.deletePersonHandler}
            name={person.name} 
            age={person.age}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
            
      </div>
    );
  }
}

export default App;
