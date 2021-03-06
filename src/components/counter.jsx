import React, { Component } from 'react';

class Counter extends React.Component {

    // state = {
    //     value : this.props.counter.value,
    //     tags : ['tag1' , 'tag2' , 'tag3']
    // };

    handleIncrement = productId => {
        console.log(productId);
        this.setState({value : this.state.value + productId })
    }

    renderTags() {
        if(!this.state.tags.length === 0){
            return <p>"no tags available"</p>
        }
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li> )}</ul>
    }

    render() { 
        console.log("props" , this.props);
        return ( 
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm' 
            onClick ={ () => this.props.onIncrement(this.props.counter)} >Increment</button>
            <button className="btn btn-danger btn-sm m-2" 
            onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            {/* <div>
                {this.renderTags()}
            </div> */}
        </div> 
        )
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'ZERO' : value;
    }
}
 
export default Counter;