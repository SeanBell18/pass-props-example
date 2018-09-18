import React, { Component } from 'react'

export default class RightChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // not using this state anymore
            counter: 0
        }
    }
    render() {
        console.log(`right-child state: { counter: ${this.state.counter} }`)
        return (
            <div className="right-child">
                   <h3> right child </h3>
                  <button onClick={ this.props.increment }> +1 </button>
                  <button onClick={ this.props.decrement }> -1 </button>
            </div>
        )
    }
}