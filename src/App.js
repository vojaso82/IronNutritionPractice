import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';



class App extends React.Component {
  state={
    allFoods: foods,
  }

  showFoods = () => {
    return this.state.allFoods.map((eachFood) => {
      return <FoodBox {...eachFood} />
    })
  }

  render() {

  return (

    <div className="App">
     {this.showFoods()}
    </div>
  );
  }
}

export default App;
