import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

    // state = {
    //     counters : [{id : 1 , value : 4},
    //     {id : 2 , value : 0},
    //     {id : 3 , value : 0},
    //     {id : 4 , value : 0}]
    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0;
    //         return c;
    //     });
    //     this.setState({counters});
    // }

    // handleIncrement = counter => {
    //    // console.log(counter);
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    // }

    // handleDelete = (counterId) => {
    //     console.log("delete Handler called " + counterId)
    //    const counters = this.state.counters.filter(c => c.id != counterId);
    //     this.setState({counters : counters});
    // } 
    render() { 
        const {onReset,counters,onDelete,onIncrement} = this.props;
        return <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
            <Counter key = {counter.id} counter = {counter} 
            onDelete = {onDelete}
            onIncrement = {onIncrement}>
                <h4>Title</h4>
                </Counter>)}
        </div>;
    }
}
 
export default Counters;