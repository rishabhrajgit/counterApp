//import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';

import Counters from './components/counters'

class App extends Component {

  state = {
    counters : [{id : 1 , value : 4},
    {id : 2 , value : 0},
    {id : 3 , value : 0},
    {id : 4 , value : 0}]
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
}

handleIncrement = counter => {
   // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}

handleDelete = (counterId) => {
    console.log("delete Handler called " + counterId)
   const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({counters : counters});
} 

  render(){
    return (
      <React.Fragment>
      <Navbar totalCOunters = {this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
         <Counters counters = {this.state.counters}
          onDelete = {this.handleDelete} 
         onReset = {this.handleReset} 
         onIncrement = {this.handleIncrement} />
       </main>
       </React.Fragment>
     );
  }
 
}

export default App;
