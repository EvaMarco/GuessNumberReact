import React from 'react';
class Input extends React.Component {

    render(){
      return(
        <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
          Introduce aquí tu número.
          </label>
          <input
          type="number"
          name="input"
          id="input"
          className="input"
          onChange = {this.props.fieldAction}
          />
          <button className="btn"
          onClick = {this.props.buttonAction}>
          Prueba
          </button>
        </div>
        )
    }
}
export default Input;