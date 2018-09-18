import React, { Component } from 'react'

export default class LeftChild extends Component {
    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
            <div className="left-child">
                    <h3> left child </h3>

                    <p> counter: {this.props.counter} </p> 
            </div>
        )
    }
}
