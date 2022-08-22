import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    render() {
    const { counter, inrementCounter} = this.props
    
    return (
      <div>
        <button onClick={inrementCounter}>Clicked {counter} times</button>
      </div>
    )
    }
}

export default ClickCounterTwo