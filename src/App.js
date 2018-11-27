import React, { Component } from 'react';
import './App.css';
// radium for certain css psuedo-selectors, { StyleRoot } for things like media queries
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
       // Below would be the data set, usually from DB in real app
      {id: '1',name: 'Mike', age: 24},
      {id: '2',name: 'Frank', age: 37},
      {id: '3',name: 'Random', age: 69}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // by slicing below with no arguments you make a copy and are not mutating the original object
    // const persons = this.state.persons.slice();
    // ES6 way done below
    // create copy and update that copy then update original state with new copy
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      // below creates the personindex into a new object so not changing the original
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // wrap psuedo-selectors as strings not just :, below is radium being used
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      // below is another example of radium being used... a style is being overwritten
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // by adding the .join(' ') it turns the array into a string "red bold"
    // let classes = ['red','bold'].join(' ');

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red','bold']
    }


    return (
      // Need to wrap the entire application in <StyleRoot></StyleRoot>
      <StyleRoot>
      <div className="App">
        <h1>Hi I'm a react app</h1>
        {/* classes as a class name becomes classes.join b/c classes is a array not a string anymore */}
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
            
      </div>
      </StyleRoot>
    );
  }
}

// Higher order component (essentially a component wrapping another component, adding extra functions)
export default Radium(App);
