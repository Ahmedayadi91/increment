import React, { Component } from 'react'

export class FullName extends Component {
    render() {
        return (
            <div>
                FullName : {this.props.name}
            </div>
        )
    }
}

export default FullName
