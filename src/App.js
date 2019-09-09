import React from 'react';
import Input from './components/Input';
import Clue from './components/Clue';
import Counter from './components/Counter';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clue : 'Escribe un número y dale a prueba',
      ValueNumber : 0,
      Counter : 0,
      RandomNumber : this.getRandomNumber(100)
    }
    console.log('r', this.state.RandomNumber);
    this.getUserNumber = this.getUserNumber.bind(this);
    this.checkNumbers = this.checkNumbers.bind(this);
  }

  getRandomNumber(max) {
    const number = Math.ceil(Math.random() * max);
    return number;
  }
  getUserNumber(event){
    const valueNumber = parseInt(event.target.value);
    this.setState ({ValueNumber : valueNumber});
  }

  checkNumbers(){
    const ValueNumber = this.state.ValueNumber;
    const RandomNumber = this.state.RandomNumber;
    let counter = this.state.Counter;
    let result;
    if(ValueNumber < RandomNumber){
    result = 'El número que has introducido es muy pequeño, introduce un número mayor.';
    counter++;
    }
    else if(ValueNumber > RandomNumber){result = 'El número que has introducido es muy grande, introduce un número menor.';
    counter++;
    }
    else{
    result = 'Has acertado campeona';
    }
    this.setState ({
      clue : result,
      Counter: counter
    });
    }

  render() {
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <Counter counterValue = {this.state.Counter}/>
        <Input 
        fieldAction = {this.getUserNumber}
        buttonAction = {this.checkNumbers}/>
        <Clue clueValue = {this.state.clue}/>
      </div>
    );
  }
}

export default App;
