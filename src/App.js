//import logo from './logo.svg';
import NavBar from './component/navbar';
import './App.css';
import Counters from './component/counters';
import React, { Component } from 'react';
import { render } from '@testing-library/react';



  class App extends Component {
    state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };

    constructor(props){
      super(props);
      console.log('App Constructor',this.props);
    }

    componentDidMount() {
      //Ajax call to server
      console.log("Component Mounted")

    }
    handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
    };
  
    handleReset = () => {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    };
    handleDelete = (counterId) => {
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      this.setState({ counters });
    };

  
  render(){
    console.log("App Rendered")
  return (
    <React.Fragment>
    <NavBar
    totalCounters = {this.state.counters.filter(c =>c.value > 0).length}/>
    <main className = "container">
      <Counters 
      counters = {this.state.counters}
      onReset = {this.handleReset} onIncrement ={this.handleIncrement} onDelete ={this.handleDelete} />
    </main>
    </React.Fragment>
  );
  }
}


export default App;
