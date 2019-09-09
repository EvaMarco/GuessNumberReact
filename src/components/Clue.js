import React from 'react';
class Clue extends React.Component {

    render(){
      return(
        <p className="resultText">{this.props.clueValue}</p>
        )
    }
}
export default Clue;