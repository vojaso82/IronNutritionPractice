import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';



class App extends React.Component {
  state={
    allFoods: foods,
    hideForm: false
  }

  showFoods = () => {
    return this.state.allFoods.map((eachFood) => {
      return <FoodBox {...eachFood} />
    })
  }
  
  addNewFood = () => {
    // console.log("hello") 
    this.setState({hideForm: !this.state.hideForm})
  }

  render() {

  return (

    <div className="App">
      <form hidden= {this.state.hideForm}>
      <input name="food" placeholder="food" type="text"/>
      <input name="calories" placeholder="calories" type="number"/>
      <input name="image" placeholder="image" type="text"/>
      </form>

      <button onClick={this.addNewFood}> Add New Food </button>

      <ul>
       {this.showFoods()} 
      </ul>



       </div>
  );
  }
}

export default App;
