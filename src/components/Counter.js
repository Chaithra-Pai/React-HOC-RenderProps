import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           counter: 0
        }
      }
  
      inrementCounter = () => {
          this.setState(prevState => {
              return {counter: prevState.counter + 1 }
          })
      }

  render() {
    return (
      <div>
        {this.props.render(this.state.counter, this.inrementCounter)}
      </div>
    )
  }
}

export default Counter