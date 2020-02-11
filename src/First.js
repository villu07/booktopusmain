import React, { Component } from 'react'

//how props can work
export class First extends Component {
    render() {
        return (
            <div>
                Hello  { this.props.name }
            </div>
        )
    }
}

export default First
