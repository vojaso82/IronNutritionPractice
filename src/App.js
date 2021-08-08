import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';



class App extends React.Component {
  state={
    allFoods: foods,
    hideForm: false,
    food:'',
    calories:'',
    image:'https://media.istockphoto.com/photos/ice-cream-sundae-picture-id1143594100?k=6&m=1143594100&s=612x612&w=0&h=GwEisVKa3aPJjDBjYxN_l8XqNx2Peu--hF5ty-UNt4I='
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

  handleSubmit = (e) => {
   e.preventDefault()
   console.log(this.state)
   let copyOfFood = [...this.state.allFoods]
   let food = {food: this.state.food, calories: this.state.calories, image: this.state.image}
   copyOfFood.unshift(food)
   this.setState({allFoods: copyOfFood})
  }

  handleChange = (e) => {
  console.log(e.target.value, e.target.name)
  this.setState({[e.target.name]: e.target.value})
  }

  render() {

  return (

    <div className="App">
      <form onSubmit={this.handleSubmit} hidden= {this.state.hideForm}>
        <input onChange={this.handleChange} name="food" placeholder="food" type="text"/>
        <input onChange={this.handleChange} name="calories" placeholder="calories" type="number"/>
        <input onChange={this.handleChange} name="image" placeholder="image" type="text" value=""/>
      <button >Submit</button>
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
