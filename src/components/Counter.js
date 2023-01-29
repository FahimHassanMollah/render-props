import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:1, 
    }
    incrementCount = () => {
        this.setState({count:this.state.count+1})
    }
    render() {
        const {render} = this.props;
        console.log(render);
        return (
            render(this.state.count,this.incrementCount)
        );
    }
}

export default Counter;