import React from 'react';
class Counter extends React.Component {

    render(){
      return(
        <p className = "tries_text" >
        {this.props.counterValue}
        </p>
        )
    }
}
export default Counter;