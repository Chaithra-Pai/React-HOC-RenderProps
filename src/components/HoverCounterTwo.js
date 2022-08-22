import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    render() {
        const { counter, inrementCounter} = this.props

        return (
        <div>
            <h2 onMouseOver={inrementCounter}>Hovered {counter} times</h2>
        </div>
        )
    }
}

export default HoverCounterTwo