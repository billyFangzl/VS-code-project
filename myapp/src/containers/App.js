import React, { Component } from 'react';
import classes from './App.css';
// import Radium,{StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

 
class App extends Component {
  constructor(props){
    super(props);

    console.log('[app.js] constructor');
  }



  state = {
    persons: [
      { id:'1', name: 'Max', age: 28 },
      { id:'2', name: 'Manu', age: 29 },
      { id:'3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons:false
  } 
 
  static getDerivedStateFromProps(props, state){
    console.log('[app.js] getDerivedStateFromProps ',props);
    return state;
  }

  componentDidMount(){
    console.log('[app.js] componentDidMount');
  }

  // componentWillMount(){
  //   console.log('[app.js] componentWillMount');
  // }

 
  nameChangedHandler =  (event,id) => {
    
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons:persons });
  }

  deleteNameHandler=(personIndex)=>{
    // const pp = this.state.persons.slice();
    const pp = [...this.state.persons];
    pp.splice(personIndex,1);
    this.setState({persons:pp});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render () {
    console.log('[app.js] render');
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };

    let person = null;
    
    if (this.state.showPersons){
      person = <Persons 
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.nameChangedHandler}  />;
      // style.backgroundColor ='red';
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // };
      
    }



    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          clicked = {this.togglePersonsHandler} />
        {person}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;
// export default Radium(App);
